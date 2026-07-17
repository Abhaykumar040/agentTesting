function dateCyclicJob(gap = 2) {
  const firstDate = new Date();

  // Start from tomorrow
  firstDate.setDate(firstDate.getDate() + 1);

  const secondDate = new Date(firstDate);
  secondDate.setDate(secondDate.getDate() + gap);

  function format(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  return {
    first: format(firstDate),
    second: format(secondDate),
  };
}

export default dateCyclicJob;