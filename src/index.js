import logger from 'helpers/logger';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();
const port = process.env.APP_PORT;

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
