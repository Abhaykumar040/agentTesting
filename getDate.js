async function getDateText(dayOffset = 0) {
  const date = new Date();

  date.setDate(date.getDate() + dayOffset);

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'long' });
  const weekday = date.toLocaleString('en-US', { weekday: 'long' });
  const year = date.getFullYear();

  function getOrdinal(n) {
    if (n > 3 && n < 21) return 'th';

    switch (n % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  }

  return `Choose ${weekday}, ${month} ${day}${getOrdinal(day)}, ${year}`;
}

export default getDateText;