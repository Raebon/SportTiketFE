import { DateTime, Settings } from 'luxon';

Settings.defaultLocale = 'cs';

export const formatDatetime = (
  datetime: Date,
  formatDatetime: Intl.DateTimeFormatOptions = DateTime.DATETIME_MED
) => {
  const date = new Date(datetime);
  const luxonDatetime = DateTime.fromJSDate(date);
  return luxonDatetime.toLocaleString(formatDatetime);
};

export const calculateRelativeTimeDifference = (datetime: Date) => {
  const date = new Date(datetime);
  const luxonDatetime = DateTime.fromJSDate(date);
  return luxonDatetime.toRelative({ base: DateTime.now() });
};
