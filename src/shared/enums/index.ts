export enum TiketStatusEnum {
  defeat = 'defeat',
  victory = 'victory',
  notEvaluated = 'not-evaluated',
  cashout = 'cashout'
}

export type TiketStatusType = 'cashout' | 'victory' | 'not-evaluated' | 'cashout';

export enum WalletLogEnum {
  deposit = 'deposit', //Vklad na účet
  withdraw = 'withdraw', //Výplata
  bet = 'bet', //Vsazená částka
  win = 'win' //Výhra
}
