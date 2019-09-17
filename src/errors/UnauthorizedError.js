import logger from 'helpers/logger';

export default class UnauthorizedError extends Error {
  constructor(msg = '') {
    super(msg);

    this.log = () => logger.error(this.message);
    this.status = 401;
  }
}
