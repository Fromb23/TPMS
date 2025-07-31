import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import fsSync from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const dateString = new Date().toISOString().split('T')[0];
const logDir = path.join(__dirname, '../logs');
const logPath = path.join(logDir, `requests-${dateString}.ndjson`);

if (!fsSync.existsSync(logDir)) {
  fsSync.mkdirSync(logDir, { recursive: true });
}

const formatTimestamp = () => {
  const now = new Date();
  return now.toISOString().replace('T', ' ').split('.')[0];
};

const requestTracker = async (req, res, next) => {
  const entry = {
    method: req.method,
    url: req.originalUrl,
    ip: req.ip,
    userAgent: req.get('User-Agent'),
    timestamp: formatTimestamp(),
  };

  try {
    await fs.appendFile(logPath, JSON.stringify(entry) + '\n');
  } catch (err) {
    console.error('Request tracking failed:', err);
  }

  next();
};

export default requestTracker;