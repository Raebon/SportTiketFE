import { WalletLogEnum } from '../../../enums';

export interface IWalletLog {
  id: string;
  walletId: string;
  type: WalletLogEnum;
  currentBalance: number;
  updatedBalance: number;
  createdAt: Date;
}
