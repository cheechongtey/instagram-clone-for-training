const winston = require('winston');
const { combine, timestamp, printf } = winston.format;
const config = require('./config');

const myFormat = printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level}] : ${message}`;
});

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(
    enumerateErrorFormat(),
    config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
    timestamp(),
    myFormat
  ),
  defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({
      filename: 'error.log',
      level: ['error'],
    }),
    new winston.transports.File({
      filename: 'combined.log',
      level: ['info'],
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: combine(timestamp(), myFormat),
    })
  );
}

module.exports = logger;
