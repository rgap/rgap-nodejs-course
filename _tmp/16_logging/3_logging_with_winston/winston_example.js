const winston = require("winston");
const path = require("path");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(__dirname, "error.log"), level: "error" }),
    new winston.transports.File({ filename: path.join(__dirname, "combined.log") }),
  ],
  // 🔒 Prevent premature exit before file writes complete
  exitOnError: false,
});

// Log messages
logger.debug("Loaded config values (dev only).");
logger.info("Server started on port 3000.");
logger.warn("API key is missing, using default.");
logger.error("Failed to connect to MongoDB.");
logger.error("App crashed. Shutting down...");

// ✅ Wait for logs to flush before exit
setTimeout(() => {
  process.exit(1);
}, 100); // Delay exit so logs flush to disk
