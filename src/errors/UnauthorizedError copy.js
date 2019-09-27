export default class UnauthorizedError extends Error {
  constructor(msg = 'UnauthorizedError') {
    super(msg);
    this.status = 401;
  }
}
