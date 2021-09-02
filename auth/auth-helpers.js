const jwt = require('jsonwebtoken');

module.exports = {
  getJwt
}

function getJwt(username) {
  const payload = {
    username
  };

  const secret = process.env.JWT_SECRET || "So this was how secrets got started, I thought to myself. People constructed them little by little.";

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options)
}