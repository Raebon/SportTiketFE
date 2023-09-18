import { WalletLogEnum } from '../../../enums';

export interface IWalletLog {
  id: string;
  walletId: string;
  type: WalletLogEnum;
  currentBalance: number;
  amount: number;
  createdAt: Date;
}

export interface StatisticsResponse {
  depositTotal: number;
  withdrawTotal: number;
  earnings: number;
}
