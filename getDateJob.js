function getDateJob(gap = 2) {
  let firstDate = new Date();

  // Start from tomorrow
  firstDate.setDate(firstDate.getDate() + 1);

  while (true) {
    const day = firstDate.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat

    // Skip weekends
    if (day === 6) {
      firstDate.setDate(firstDate.getDate() + 2);
      continue;
    }

    if (day === 0) {
      firstDate.setDate(firstDate.getDate() + 1);
      continue;
    }

    // Check if enough weekdays remain before Saturday
    const weekdaysLeft = 6 - day;

    if (weekdaysLeft >= gap) {
      break;
    }

    // Jump to next Monday
    firstDate.setDate(firstDate.getDate() + (8 - day));
  }

  // Find second date (working days only)
  const secondDate = new Date(firstDate);
  let count = 1;

  while (count < gap) {
    secondDate.setDate(secondDate.getDate() + 1);

    const day = secondDate.getDay();

    if (day !== 0 && day !== 6) {
      count++;
    }
  }

  function getOrdinal(n) {
    if (n > 3 && n < 21) return "th";

    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  }

  function format(date) {
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "long" });
    const weekday = date.toLocaleString("en-US", { weekday: "long" });

    return `Choose ${weekday}, ${month} ${day}${getOrdinal(day)},`;
  }

  return {
    first: format(firstDate),
    second: format(secondDate),
  };
}

export default getDateJob;