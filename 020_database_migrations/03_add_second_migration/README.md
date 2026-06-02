# 03_add_second_migration: A Second Migration

Lesson 02 created the `users` table. Now you need a `posts` table too.

**Add a new migration file. Do not edit the old one.**

---

## 1. Two Migration Files

```
db/migrations/
├── 20240521120000_create_users.sql   ← already know this from lesson 02
└── 20240522120000_create_posts.sql   ← new: adds a posts table
```

dbmate runs them in order (by the number at the start of the file name).

---

## 2. Set Up `.env`

```bash
cp .env.example .env
```

Your `.env` should contain:

```bash
DATABASE_URL="sqlite:db/dev.sqlite3"
```

---

## 3. Run Them

```bash
dbmate up
```

(See lesson 02 for what `dbmate up` does.)

If you already ran lesson 02 on this machine, only the **new** migration runs. Here both are new, so you will see both applied:

```
Applying: 20240521120000_create_users.sql
Applying: 20240522120000_create_posts.sql
```

---

## 4. Check Status

```bash
dbmate status
```

Both lines should show `[X]`.

---

## 5. Peek at the Database

```bash
sqlite3 db/dev.sqlite3
```

```sql
.headers on
.mode column

.tables
SELECT * FROM schema_migrations;
.quit
```

**Tables:** `posts`, `schema_migrations`, `users`

**`schema_migrations`:** two rows — one version per applied migration (`20240521120000` and `20240522120000`).

---

## 6. One Rule to Remember

If a migration already ran on your machine (or a teammate's), **do not change that file**.  
Need another change? Add another file in `db/migrations/`.

---

## 7. Cleaning Up

Remove what the commands created:

```bash
rm -f .env
rm -f db/dev.sqlite3 db/dev.sqlite3-shm db/dev.sqlite3-wal db/schema.sql
```

Keep `db/migrations/` and `.env.example`.

Run again anytime: `cp .env.example .env` then `dbmate up`.
