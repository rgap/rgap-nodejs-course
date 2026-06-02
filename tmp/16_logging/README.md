# 📄 JavaScript Logging — Theory, History, and Use

## 🧠 What Is Logging?

Logging refers to the practice of recording information during a program's execution. It helps developers understand what the application is doing, trace bugs, and collect runtime statistics.

Logs can capture:

- ✅ **Info messages** – general progress updates
- ⚠️ **Warnings** – unusual but not fatal behavior
- ❌ **Errors** – critical failures
- 🐛 **Debug data** – fine-grained technical info for development

---

## ⏳ Historical Context

### 📟 Early Days of Logging

- **1970s–1980s**: Logging became popular in Unix systems through tools like `syslog`.
- **1990s**: Apache Log4j standardized the idea of multiple log levels (INFO, WARN, ERROR, DEBUG).
- **2000s–2010s**: JavaScript logging began with simple `console.log()` in browsers.

### 📦 Node.js Era

- Node.js (since **2009**) introduced server-side logging needs.
- Libraries like `log4js`, `winston`, and `bunyan` were created to support structured and persistent logging.

---

## 🛠️ Why Logging Matters

| Use Case                | Logging Helps You...                       |
| ----------------------- | ------------------------------------------ |
| Debugging               | Trace what happened before an error        |
| Monitoring              | Check status and health of systems         |
| Auditing                | Track user actions and system events       |
| Troubleshooting in Prod | Understand errors without affecting users  |
| Security                | Detect unexpected access or usage patterns |

---

## 🔧 Topics Covered

Each subfolder covers a practical and theoretical topic:

1. **Intro to console logging**
2. **Logging levels (info, error, debug)**
3. **Creating a custom logger**
4. **Using Log4js**
5. **Using Winston**
6. **Logging with async/await**
7. **Persisting logs to file**
8. **Best practices**

---

## 📚 References

- [Log4j Whitepaper](https://logging.apache.org/log4j/1.2/manual.html)
- [Winston GitHub](https://github.com/winstonjs/winston)
- [Node.js Logging Guide](https://nodejs.org/en/docs/guides/debugging-getting-started)
