# 06_dbmate_drop: Delete the Whole Database

Lesson 05 undid **one** migration at a time. Sometimes you want to wipe the **entire** local database and start over.

That is what `dbmate drop` is for.

---

## 1. Two Migration Files

Same as before: `users`, then `posts`.

---

## 2. Set Up and Apply Both

```bash
cp .env.example .env
dbmate up
```

```bash
sqlite3 db/dev.sqlite3 ".tables"
sqlite3 db/dev.sqlite3 "SELECT * FROM schema_migrations;"
```

**Tables:** `posts`, `schema_migrations`, `users`  
**`schema_migrations`:** two rows

Confirm the database file exists:

```bash
ls -la db/dev.sqlite3
```

---

## 3. Drop the Database

### What does `dbmate drop` do?

```bash
dbmate drop
```

- Deletes the database file (`db/dev.sqlite3` for SQLite)
- Everything is gone: tables, data, and `schema_migrations`
- Does **not** delete your migration files in `db/migrations/`

Check:

```bash
ls -la db/dev.sqlite3
```

The file should be missing (or `ls` reports "No such file").

---

## 4. Rebuild From Migrations

```bash
dbmate up
```

dbmate creates a **new** empty database and runs **all** migrations from scratch.

```bash
sqlite3 db/dev.sqlite3 ".tables"
sqlite3 db/dev.sqlite3 "SELECT * FROM schema_migrations;"
```

Same result as before drop: `posts`, `users`, two rows in `schema_migrations`.

---

## 5. `drop` vs `rollback` / `down`

| Command | What it removes |
| :--- | :--- |
| `dbmate rollback` / `dbmate down` | One migration (last applied) |
| `dbmate drop` | The entire database file |

Use `drop` when you want a completely fresh local database. Use `rollback` when you only want to undo the latest change.

---

## 6. Cleaning Up

```bash
rm -f .env
rm -f db/dev.sqlite3 db/dev.sqlite3-shm db/dev.sqlite3-wal db/schema.sql
```

Keep `db/migrations/` and `.env.example`.

Run again: `cp .env.example .env` then `dbmate up`.
