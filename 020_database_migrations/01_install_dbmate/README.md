# 01_install_dbmate: Install dbmate

Install **dbmate** — the CLI we use to run SQL migrations. Nothing else to set up in this lesson.

---

## 1. Install

Pick **one** method.

### macOS

```bash
brew install dbmate
```

### Linux

```bash
sudo curl -fsSL -o /usr/local/bin/dbmate https://github.com/amacneil/dbmate/releases/latest/download/dbmate-linux-amd64
sudo chmod +x /usr/local/bin/dbmate
```

### npm (any OS)

```bash
npm install --save-dev dbmate
```

> [!TIP]
> If you used npm, use `npx dbmate` instead of `dbmate` in the next lessons.

---

## 2. Verify

```bash
dbmate --help
```

If you see the help text, you are done with this lesson.

---

## 3. What dbmate Creates Later

You do **not** need to create folders by hand. dbmate creates them when you use it:

| Command                | What appears                                                                 |
| :--------------------- | :--------------------------------------------------------------------------- |
| `dbmate new some_name` | `db/migrations/` and a new `.sql` file                                       |
| `dbmate up`            | `db/dev.sqlite3` (from `DATABASE_URL` in `.env`) and updates `db/schema.sql` |

Lesson `02_first_migration` already includes migration files. You will copy `.env.example` to `.env` there and run `dbmate up`.
