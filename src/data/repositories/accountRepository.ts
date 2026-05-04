import {accountMapper} from '@/src/data/mappers/accountMapper';
import {accountLocalDataSource} from '@/src/data/local/accounts/accountLocalDataSource';

export const accountRepository = {
  async getAccounts() {
    const rows = await accountLocalDataSource.findAll();
    console.log({rows: rows[0]});
    return rows.map(accountMapper.localRowToDomain);
  },
};
