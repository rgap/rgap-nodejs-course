# 🚀 Logging with Pino

## 🎯 Goal

Use `pino` for fast, structured, and JSON-based logging in Node.js.

---

## ⏳ Historical Context

- 🗓️ **2016** — Pino (short for “**P**erformance **I**s **No**t **O**ptional”) was created by Matteo Collina and the NearForm team.
- Designed to be **10x faster** than Winston or Bunyan.
- Prioritizes structured, asynchronous, low-overhead logging.

---

## 💡 Why Use Pino?

| Feature                  | Benefit                                          |
| ------------------------ | ------------------------------------------------ |
| JSON output              | Machine-readable and log-aggregator-friendly     |
| Fastest logger           | Extremely low overhead, ideal for high-load apps |
| Child loggers            | Add context (e.g. request ID) dynamically        |
| Transports               | External tools can format/filter logs            |
| ESM + TypeScript support | Works well in modern setups                      |

---

## ⚙️ Installation

```bash
npm install pino
```

If you want pretty-printed output, also install:

```bash
npm install -D pino-pretty
```

---

## ▶️ Run the Example (Human-Readable Logs)

```bash
node pino_example.js | npx pino-pretty
```

This will pretty-print the logs in the terminal.

---

## 📁 Write Logs to a File

### ✅ Option 1: Shell Redirection (simplest)

```bash
node pino_example.js >> app.log
```

Or with pretty formatting:

```bash
node pino_example.js | npx pino-pretty >> app.log
```

### ✅ Option 2: Code-Based File Logging

If you want logs written directly to a file programmatically:

```js
const fs = require("fs");
const pino = require("pino");

const logStream = fs.createWriteStream("pino-output.log", { flags: "a" });

const logger = pino({ level: "debug", timestamp: pino.stdTimeFunctions.isoTime }, logStream);

logger.info("This message goes into pino-output.log");
```
