import { List } from '../../interfaces';
import { TTiket } from './interface';

export class TiketService {
  public getList(): List<TTiket> {
    let data: Array<TTiket> = [
      {
        id: '123213asdasd',
        name: 'Tiket #1',
        status: 'not-evaluated',
        totalRate: 1.86,
        deposit: 1200,
        approximateEndDatetime: new Date('2023-08-25T10:59:47.240Z')
      },
      {
        id: '123213asdasdasdasd',
        name: 'Tiket #2',
        status: 'victory',
        totalRate: 1.16,
        deposit: 100,
        approximateEndDatetime: new Date('2023-08-25T12:59:47.240Z')
      },
      {
        id: '123213asdasdasdasdsadasd',
        name: 'Tiket #3',
        status: 'defeat',
        totalRate: 5.16,
        deposit: 100,
        approximateEndDatetime: new Date('2023-08-25T13:59:47.240Z')
      },
      {
        id: '123213asdasdasdasdsadasd',
        name: 'Tiket #4',
        status: 'not-evaluated',
        totalRate: 2.16,
        deposit: 750,
        approximateEndDatetime: new Date('2023-08-25T09:59:47.240Z')
      },
      {
        id: '123213asdasdasdasdsadasdasd',
        name: 'Tiket #5',
        status: 'victory',
        totalRate: 2.16,
        deposit: 750,
        approximateEndDatetime: new Date('2023-08-25T09:59:47.240Z')
      }
    ];
    return {
      data,
      count: data.length
    };
  }
}
