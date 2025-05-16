# 🧭 Logging Best Practices

## 🎯 Goal

Understand **how to log effectively** — not just how to use logging tools. Proper logging is critical for debugging, auditing, and maintaining healthy production systems.

---

## ✅ General Best Practices

| Practice                         | Why It Matters                                                 |
| -------------------------------- | -------------------------------------------------------------- |
| Log with context                 | Include request IDs, user IDs, IPs when relevant               |
| Include timestamps               | Always timestamp logs (manual or via logger)                   |
| Use levels consistently          | Don’t misuse `info` for errors or `error` for normal flow      |
| Avoid logging sensitive data     | Redact tokens, passwords, personal info                        |
| Don’t rely only on `console.log` | Use structured loggers in real apps                            |
| Rotate log files                 | Prevent logs from growing indefinitely                         |
| Store logs persistently          | Use file logging or external systems (e.g., ELK, Sentry)       |
| Capture unhandled errors         | Use `process.on('unhandledRejection')` and `uncaughtException` |
| Flush logs before exit           | Especially important when using async logging libraries        |

---

## ⚠️ What to Avoid

- ❌ Logging secrets like passwords, tokens, or credit card data
- ❌ Logging too much (log spam = slower performance)
- ❌ Swallowing errors without logging them
- ❌ Only logging in development environments

---

## 🧰 Production Tips

- Use a library like `winston` or `pino`
- Pipe logs to monitoring tools (e.g. Datadog, Logstash, Papertrail)
- Separate logs by category: `app`, `db`, `auth`, etc.
- Format logs in JSON if integrating with external systems

---

## 📚 References

- [12 Factor App: Logs](https://12factor.net/logs)
- [Winston Docs](https://github.com/winstonjs/winston)
- [Log4js Docs](https://log4js-node.github.io/log4js-node/)

---

## ✅ Summary

Good logging turns confusing bugs into solvable problems. It’s **not just about writing to the console**, but about capturing meaningful, readable, and relevant information for the right people — at the right time.
