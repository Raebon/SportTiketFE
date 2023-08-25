import { List } from '../../interfaces';
import { INotification } from './interface';

export class NotificationService {
  public getList(): List<INotification> {
    let data = [
      {
        id: 'asddsad',
        tiketId: '123213asdasd',
        text: 'Nevyhodnocený tiket'
      },
      {
        id: 'asddsada',
        tiketId: '123213asdasdasdasdsadasd',
        text: 'Nevyhodnocený tiket'
      }
    ];

    return {
      data,
      count: data.length
    };
  }
}
