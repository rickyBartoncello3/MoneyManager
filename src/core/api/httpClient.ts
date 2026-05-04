const JSON_MIME_TYPE = 'application/json';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type RequestOptions = {
  method?: HttpMethod;
  params?: Record<string, string | number | boolean | undefined | null>;
  body?: unknown;
  headers?: Record<string, string>;
};

class HttpClient {
  private baseUrl: string;
  private idToken: string | null = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl.replace(/\/$/, '');
  }

  setIdToken(token: string | null) {
    this.idToken = token;
  }

  private getAuthHeader() {
    if (!this.idToken) return {};

    return {
      Authorization: `Bearer ${this.idToken}`,
    };
  }

  private getSearchParams(
    params?: Record<string, string | number | boolean | undefined | null>,
  ) {
    if (!params) return '';

    const query = Object.entries(params)
      .flatMap(([key, value]) => {
        if (value === undefined || value === null) return [];

        return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
      })
      .join('&');

    return query ? `?${query}` : '';
  }

  private getUrl(path: string, params?: RequestOptions['params']) {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${this.baseUrl}${normalizedPath}${this.getSearchParams(params)}`;
  }

  private async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const method = options.method ?? 'GET';
    const url = this.getUrl(path, options.params);

    const isFormData = options.body instanceof FormData;

    const response = await fetch(url, {
      method,
      headers: {
        Accept: JSON_MIME_TYPE,
        ...this.getAuthHeader(),
        ...(!isFormData && options.body ? {'Content-Type': JSON_MIME_TYPE} : {}),
        ...options.headers,
      },
      body: options.body
        ? isFormData
          ? (options.body as FormData)
          : JSON.stringify(options.body)
        : undefined,
    });

    const contentType = response.headers.get('content-type');
    const hasJson = contentType?.includes(JSON_MIME_TYPE);

    const responseBody = hasJson ? await response.json() : await response.text();

    if (!response.ok) {
      throw {
        status: response.status,
        url,
        method,
        body: responseBody,
      };
    }

    return responseBody as T;
  }

  get<T>(
    path: string,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'GET',
      params,
    });
  }

  post<T>(
    path: string,
    body?: unknown,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params' | 'body'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'POST',
      body,
      params,
    });
  }

  put<T>(
    path: string,
    body?: unknown,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params' | 'body'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'PUT',
      body,
      params,
    });
  }

  patch<T>(
    path: string,
    body?: unknown,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params' | 'body'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'PATCH',
      body,
      params,
    });
  }

  delete<T>(
    path: string,
    params?: RequestOptions['params'],
    options?: Omit<RequestOptions, 'method' | 'params'>,
  ) {
    return this.request<T>(path, {
      ...options,
      method: 'DELETE',
      params,
    });
  }
}

export const httpClient = new HttpClient(
  process.env.EXPO_PUBLIC_API_URL ?? 'https://api.example.com',
);
