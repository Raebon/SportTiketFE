export interface List<t> {
  data: Array<t>;
  count: number;
}

export interface IMenuItems {
  label: string;
  path: string;
  disabled?: boolean;
}

export interface LoginDetail {
  userName: string;
  password: string;
}
