export const isValidDate = (month, year) => {
  const date = new Date();
  const currentMonth = date.getMonth() + 1;
  const currentYear = date.getFullYear();

  if (year >= currentYear && month >= currentMonth) return true;
  return false;
};
