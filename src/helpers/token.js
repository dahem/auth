import jwt from 'jsonwebtoken';

const tokenSecret = 'b0l1v4rjs#';

export function verifyToken(token) {
  return new Promise(resolve => resolve(jwt.verify(token, tokenSecret)));
}

export function buildToken(data) {
  const expirationTimeInSeconds = 60 * 60 * 24;
  return jwt.sign(data, tokenSecret, { expiresIn: expirationTimeInSeconds });
}
