export interface GetResult<t> {
  data: t;
  error: boolean;
  message: string;
}

export interface GetListResult<t> {
  data: FindAllAndCountType<t>;
  error: boolean;
  message: string;
}

type FindAllAndCountType<t> = {
  count: number;
  rows: t;
};
