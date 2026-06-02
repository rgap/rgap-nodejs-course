# 🪵 Logging with Winston

## 🎯 Goal

Use the `winston` logging library to record structured logs in Node.js, supporting multiple formats and transports (console, files, etc.).

---

## ⏳ Historical Context

- Developed around **2010** by Flatiron (Nodejitsu).
- Became the **de facto standard** for professional logging in Node.js.
- Focused on flexibility, formatters, metadata, and multiple transports.

---

## 🔍 Key Features

| Feature    | Description                               |
| ---------- | ----------------------------------------- |
| Log levels | Supports standard and custom levels       |
| Transports | Log to console, file, HTTP, etc.          |
| Formatters | Add timestamps, colors, JSON, custom text |
| Metadata   | Include request/user info in logs         |
| Async-safe | Non-blocking and production-ready         |

---

## ⚙️ Install Winston

```bash
npm install winston
```

## ▶️ Run the Example

```bash
node winston_example.js
```

You’ll see logs printed to the terminal and also saved to combined.log and error.log.
