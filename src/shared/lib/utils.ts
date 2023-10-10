import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { IUser } from '../service/user/interface';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (val: number) => {
  if (!val) {
    return '0.00 Kč';
  }
  return val.toLocaleString('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
};

export const formatFullName = (user: IUser) => {
  console.log(`${user.firstName} ${user.lastName}`);
  return `${user.firstName} ${user.lastName}`;
};
