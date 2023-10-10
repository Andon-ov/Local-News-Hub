export function formatDate(dateStr) {
  const now = new Date();
  const dateObj = new Date(dateStr);

  const dayInMillis = 24 * 60 * 60 * 1000;
  const diffInDays = Math.floor((now - dateObj) / dayInMillis);

  if (diffInDays === 0) {
    return "днес";
  } else if (diffInDays === 1) {
    return "вчера";
  } else if (diffInDays < 7) {
    return `Преди ${diffInDays} дни`;
  } else {
    const monthsOfYear = [
      "Януари",
      "Февруари",
      "Март",
      "Април",
      "Май",
      "Юни",
      "Юли",
      "Август",
      "Септември",
      "Октомври",
      "Ноември",
      "Декември",
    ];
    const month = monthsOfYear[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${day} ${month} ${year}`;
  }
}
