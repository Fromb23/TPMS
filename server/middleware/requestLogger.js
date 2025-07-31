import logger from '../utils/logger.js';

const requestLogger = (req, res, next) => {
  const logMessage = `${req.method} ${req.originalUrl} from ${req.ip} - "${req.get('User-Agent')}"`;
  logger.info(logMessage);
  next();
};

export default requestLogger;