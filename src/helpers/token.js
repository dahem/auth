import jwt from 'jsonwebtoken';

export function verifyToken(token, secretToken) {
  return new Promise(resolve => resolve(jwt.verify(token, secretToken)));
}

export function buildToken(data, secretToken) {
  const expirationTimeInSeconds = 60 * 60 * 24;
  return jwt.sign(data, secretToken, { expiresIn: expirationTimeInSeconds });
}
