import { ICreateUser } from '../interfaces';

export class CreateUserDto {
  public firstName: string;
  public lastName: string;
  public userName: string;
  public email: string;
  public password: string;
  constructor(data: ICreateUser) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.userName = data.userName;
    this.email = data.email;
    this.password = data.password;
  }
}
