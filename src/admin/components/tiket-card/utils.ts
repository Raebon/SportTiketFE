const StatusMap = new Map([
  ['not-evaluated', 'Nevyhodnoceno'],
  ['victory', 'Výhra'],
  ['defeat', 'Prohra']
]);

export const getStatusText = (status: string) => {
  return StatusMap.has(status) ? StatusMap.get(status) : 'Neznámý stav';
};
