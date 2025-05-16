// ✅ SHOWING DIFFERENT LOGGING LEVELS

// Might be hidden unless enabled in some browsers
console.debug("🐛 [DEBUG] Loaded config values (dev only).");

// Equivalent to console.info()
console.log("ℹ️ [INFO] Server started on port 3000.");

// Useful for noticing fallback behavior
console.warn("⚠️ [WARN] API key is missing, using default.");

// Critical issue — should be logged in production
console.error("❌ [ERROR] Failed to connect to MongoDB.");

// Simulated fatal error (no built-in fatal method)
console.error("🔥 [FATAL] App crashed. Shutting down...");
process.exit(1); // Ends the process with an error code
