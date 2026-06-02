// 📦 LOGGING IN NODE.JS USING LOG4JS

const log4js = require("log4js");

// Load external configuration (appenders, levels, etc.)
log4js.configure("./log4js_config.json");

// Get the default logger
const logger = log4js.getLogger();

// 🐛 Development-only details
logger.debug("Loaded config values (dev only).");

// ℹ️ Normal operational message
logger.info("Server started on port 3000.");

// ⚠️ Warnings about recoverable issues
logger.warn("API key is missing, using default.");

// ❌ Errors that require developer attention
logger.error("Failed to connect to MongoDB.");

// 🔥 Critical failure — stopping app
logger.fatal("App crashed. Shutting down...");

// Graceful shutdown with error code
process.exit(1);
