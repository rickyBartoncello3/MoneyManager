import React, {PropsWithChildren, useState} from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

export function QueryProvider({children}: PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            staleTime: 1000 * 30,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
