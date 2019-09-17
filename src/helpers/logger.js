import winston from 'winston';

const customLevels = {
  levels: {
    info: 0,
    warn: 1,
    debug: 2,
    error: 3,
  },
  colors: {
    info: 'green',
    warn: 'yellow',
    debug: 'blue',
    error: 'red',
  },
};

winston.addColors(customLevels.colors);

const logger = winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
      ),
      level: 'info',
    }),
  ],
});

export default logger;
