// utils/logger.js
import winston from 'winston';

const timestampFormat = winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' });

const consoleFormat = winston.format.printf(({ level, message, timestamp }) => {
  return `[${timestamp}] [${level.toUpperCase()}] ${message}`;
});

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(timestampFormat, consoleFormat),
  transports: [
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: winston.format.combine(
        timestampFormat,
        winston.format.json()
      ),
    }),
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: winston.format.combine(
        timestampFormat,
        winston.format.json()
      ),
    }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console());
}

export default logger;