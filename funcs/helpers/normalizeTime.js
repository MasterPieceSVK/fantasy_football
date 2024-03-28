function normalizeTime(time) {
  let dateStr = time;
  let dateObj = new Date(dateStr);
  let result = dateObj.toISOString();
  result = result.slice(0, result.lastIndexOf(".")) + "Z";
  return result;
}

module.exports = normalizeTime;
