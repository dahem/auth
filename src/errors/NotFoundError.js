export default class NotFoundError extends Error {
  constructor(msg = 'NotFoundError') {
    super(msg);
    this.status = 404;
  }
}
