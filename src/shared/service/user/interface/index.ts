import { WalletLogEnum } from '../../../enums';

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password?: string;
}

export interface IWallet {
  id: string;
  balance: number;
  currentBet: number;
}

export interface IBalanceUpdateRequest {
  id: string;
  amount: number;
  type: WalletLogEnum;
}
