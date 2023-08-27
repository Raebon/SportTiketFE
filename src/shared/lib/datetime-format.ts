import moment from 'moment';

export const formatDatetime = (datetime: Date, formatDatetime: string = 'L') => {
  return moment(datetime).format(formatDatetime);
};
