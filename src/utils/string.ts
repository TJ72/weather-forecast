export const getDateFormat = (date: string) => {
  const [, month, day] = date.split('-');
  return `${month}/${day}`;
};
