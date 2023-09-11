export interface TTiket {
  id: string;
  userId: string;
  userName?: string;
  name: string;
  bet: number;
  rate: number;
  cashoutMoney: number;
  approximateEndDatetime: Date;
  status: TiketStatusType;
}

export enum TiketStatusEnum {
  defeat = 'defeat',
  victory = 'victory',
  notEvaluated = 'not-evaluated',
  cashout = 'cashout'
}
export type TiketStatusType = 'cashout' | 'victory' | 'not-evaluated' | 'cashout';

export interface CreateTiket {
  name: string;
  bet: number;
  rate: number;
  approximateEndDatetime: Date;
  status: TiketStatusType;
}

export class CreateTiketDto {
  public userId: string;
  public name: string;
  public bet: number;
  public rate: number;
  public approximateEndDatetime: Date;
  public status: TiketStatusType;
  constructor(data: any) {
    this.userId = data.userId;
    this.name = data.name;
    this.bet = data.bet.toFixed(2);
    this.rate = data.rate;
    this.approximateEndDatetime = data.approximateEndDatetime;
    this.status = data.status;
  }
}

export interface UpdateTiket {
  id: string;
  name?: string;
  bet?: number;
  rate?: number;
  cashoutMoney?: number;
  approximateEndDatetime?: Date;
}
export interface UpdateTiketStatus {
  id: string;
  bet?: number;
  rate?: number;
  cashoutMoney?: number;
  status?: TiketStatusType;
}

export interface DeleteTiket {
  tiketId: string;
  bet: number;
  status: TiketStatusType;
}

export class UpdateTiketDto {
  public id: string;
  public name?: string;
  public bet?: number;
  public rate?: number;
  public cashoutMoney?: number;
  public approximateEndDatetime?: Date;
  public status?: TiketStatusType;
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.bet = data.bet.toFixed(2);
    this.rate = data.rate;
    this.cashoutMoney = data.cashoutMoney.toFixed(2);
    this.approximateEndDatetime = data.approximateEndDatetime;
    this.status = data.status;
  }
}

export interface TiketFilter {
  search?: string;
}
