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
    this.bet = data.bet;
    this.rate = data.rate;
    this.approximateEndDatetime = data.approximateEndDatetime;
    this.status = data.status;
  }
}

export interface UpdateStatusTiket {
  id: string;
  status: TiketStatusType;
  cashoutMoney?: number;
}

export class UpdateTiketDto {
  public id: string;
  public userId?: string;
  public name?: string;
  public bet?: number;
  public rate?: number;
  public approximateEndDatetime?: Date;
  public status?: TiketStatusType;
  public cashoutMoney?: number;
  constructor(data: any) {
    this.id = data.id;
    this.userId = data.userId;
    this.name = data.name;
    this.bet = data.bet;
    this.rate = data.rate;
    this.approximateEndDatetime = data.approximateEndDatetime;
    this.status = data.status;
    this.cashoutMoney = data.cashoutMoney;
  }
}
