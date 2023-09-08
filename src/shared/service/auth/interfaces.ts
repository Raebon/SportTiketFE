export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  lastLoginDate: Date;
}

export interface ICreateUser {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}
