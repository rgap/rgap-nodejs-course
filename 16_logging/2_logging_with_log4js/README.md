# 📦 Structured Logging with Log4js

## 🎯 Goal

Use the `log4js` library to log messages with levels, categories, and file output.

---

## 🕰️ Historical Background

- Inspired by **Apache Log4j**, a powerful Java logging framework from the early 2000s.
- `log4js` brings the same idea to Node.js: loggers, appenders, levels, and categories.
- One of the first structured logging libraries for JavaScript before `winston` became more popular.

---

## 🧠 Why Use Log4js?

| Feature             | Description                                     |
| ------------------- | ----------------------------------------------- |
| Appenders           | Define **where** logs go (console, files, etc.) |
| Categories          | Organize logs into components/modules           |
| Log levels          | Filter logs like DEBUG, INFO, ERROR             |
| Configurable output | Timestamps, formats, file rotation, etc.        |

---

## 🔧 Setup

Install log4js:

```bash
npm install log4js
```

## ▶️ Run the Example

```bash
node log4js_example.js
```

Logs will appear in the terminal and be written to app.log.
