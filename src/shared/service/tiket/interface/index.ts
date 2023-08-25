export interface TTiket {
  id: string;
  name: string;
  status: TTiketStatuses;
  totalRate: number;
  deposit: number;
  approximateEndDatetime: Date;
}

export interface TTopTiket extends TTiket {
  username: string;
}

export class TopTicket implements TTopTiket {
  constructor(
    public id: string,
    public name: string,
    public username: string,
    public status: TTiketStatuses,
    public totalRate: number,
    public deposit: number,
    public approximateEndDatetime: Date
  ) {}
}

export type TTiketStatuses = 'not-evaluated' | 'victory' | 'defeat';
