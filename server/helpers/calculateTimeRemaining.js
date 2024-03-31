function calculateTimeRemaining(utc_date, dateRn) {
  let diffMs = utc_date - dateRn; // milliseconds between now & the end time
  let diffSecs = Math.floor(diffMs / 1000); // seconds
  let diffMins = Math.floor(diffSecs / 60); // minutes
  let diffHrs = Math.floor(diffMins / 60); // hours

  diffMins = diffMins % 60; // minutes in 1 hour
  diffSecs = diffSecs % 60; // seconds in 1 min

  const finalObj = {
    diffHrs,
    diffMins,
    diffSecs,
  };

  return finalObj;
}

module.exports = calculateTimeRemaining;
