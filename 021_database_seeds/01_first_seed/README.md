# 01_first_seed: Your First Seed File

`db/setup.sql` creates an empty `users` table. `db/seed.sql` adds the **rows**.

This lesson is only about the seed step.

---

## 1. Files in This Lesson

```
01_first_seed/db/
├── setup.sql   ← CREATE TABLE (empty table)
└── seed.sql    ← INSERT rows
```

Opening `db/dev.sqlite3` creates the database file if it does not exist yet.

---

## 2. Create the Table

```bash
sqlite3 db/dev.sqlite3 < db/setup.sql
```

Check — table exists, no rows:

```bash
sqlite3 db/dev.sqlite3 "SELECT * FROM users;"
```

Empty result.

---

## 3. Run the Seed

```bash
sqlite3 db/dev.sqlite3 < db/seed.sql
```

Or from inside the shell:

```bash
sqlite3 db/dev.sqlite3
```

```sql
.read db/seed.sql
SELECT * FROM users;
.quit
```

You should see Alice and Bob.

---

## 4. Order Matters

Always:

1. **`setup.sql`** — create the table
2. **`seed.sql`** — insert rows

If you run the seed first, SQLite errors: `no such table: users`.

---

## 5. Cleaning Up

```bash
rm -f db/dev.sqlite3 db/dev.sqlite3-shm db/dev.sqlite3-wal
```

Keep `db/setup.sql` and `db/seed.sql`.

Run again:

```bash
sqlite3 db/dev.sqlite3 < db/setup.sql
sqlite3 db/dev.sqlite3 < db/seed.sql
```
