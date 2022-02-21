require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtOptions = {
  algorithm: 'HS256',
  expiresIn: '1h',
  subject: 'taicout6'
};

const payload = {
  isAdmin: false,
};

const { JWT_SECRET } = process.env;

const token = jwt.sign(payload, JWT_SECRET, jwtOptions);

console.log(token);

jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
