# 📝 Logging Basics in JavaScript

## 🎯 Goal

Learn how to use JavaScript’s built-in `console` methods for logging, and understand the meaning and use of different **log levels** (info, debug, warn, error).

---

## 🕰️ Historical Context

### 📟 Early Logging Origins

- **1970s–80s**: The Unix `syslog` system introduced the concept of log levels.
- **1990s**: Apache Log4j standardized these levels, widely adopted in Java, .NET, and later JavaScript ecosystems.
- **2004+**: Browsers added `console.log()` for debugging.
- **2009**: Node.js adopted the console API for server-side logging.

JavaScript logging evolved from simple `console.log()` debugging to structured logging with levels and third-party libraries.

---

## 🔍 Built-in Console Methods

| Method            | Use Case                                 |
| ----------------- | ---------------------------------------- |
| `console.log()`   | General output / info (default level)    |
| `console.info()`  | Informational messages (alias of `.log`) |
| `console.debug()` | Dev-only internal info (may be hidden)   |
| `console.warn()`  | Warnings that aren't critical            |
| `console.error()` | Serious runtime errors                   |

---

## 📊 Why Use Logging Levels?

| Level | Purpose                                    | JS Method                            |
| ----- | ------------------------------------------ | ------------------------------------ |
| Debug | Detailed developer information             | `console.debug()`                    |
| Info  | Routine messages for app progress          | `console.info()`                     |
| Warn  | Indicates potential issues                 | `console.warn()`                     |
| Error | Something failed that needs attention      | `console.error()`                    |
| Fatal | Unrecoverable error (custom, not built-in) | `console.error()` + `process.exit()` |

Levels help prioritize and filter logs — especially in production environments or when using log processors.

---

## ▶️ Run the Examples

```bash
node basic_console_logging.js
node info_debug_error.js
```
