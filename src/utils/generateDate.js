export default function generateDate() {
  const date = new Date();
  let day = date.getDate().toString();
  day = (day.length === 1) ? `0${day}` : day;
  let month = (date.getMonth() + 1).toString();
  month = (month.length === 1) ? `0${month}` : month;
  const year = date.getFullYear();
  const formatDate = `${year}-${month}-${day}`;

  const hour = date.getHours();
  const minutes = date.getMinutes();
  const secods = date.getSeconds();
  const formatHours = `${hour}:${minutes}:${secods}`;

  return { formatDate, formatHours };
}
