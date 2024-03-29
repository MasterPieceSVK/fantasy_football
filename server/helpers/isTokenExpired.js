function isTokenExpired(token) {
  const now = Math.floor(Date.now() / 1000);
  return now > token.exp;
}

module.exports = isTokenExpired;
