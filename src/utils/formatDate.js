export const formatDate = (date) => {
  const dateObj = date !== undefined ? new Date(date) : new Date();
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  return day + "/" + month + "/" + year;
};
