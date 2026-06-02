// 🚀 LOGGING WITH PINO — STANDARD JSON OUTPUT

const pino = require("pino");

// Create a simple logger (no transport in config)
const logger = pino({
  level: "debug",
  timestamp: pino.stdTimeFunctions.isoTime,
});

// Log messages (output is JSON — pipe to pino-pretty in terminal)
logger.debug("Loaded config values (dev only).");
logger.info("Server started on port 3000.");
logger.warn("API key is missing, using default.");
logger.error("Failed to connect to MongoDB.");
logger.fatal("App crashed. Shutting down...");

process.exit(1);
