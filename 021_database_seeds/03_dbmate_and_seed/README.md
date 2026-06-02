# 03_dbmate_and_seed: Migrations + Seeding Together

Lessons **01** and **02** used `setup.sql` for tables. Real projects use **dbmate** for structure (see `020_database_migrations`) and a **seed file** for starter rows.

This lesson puts both steps together.

---

## 1. Files in This Lesson

```
03_dbmate_and_seed/db/
├── migrations/          ← schema (dbmate)
│   ├── 20240521120000_create_users.sql
│   └── 20240522120000_create_posts.sql
└── seed.sql             ← data (sqlite3)
```

| Step | Tool | File |
| :--- | :--- | :--- |
| Structure | `dbmate up` | `db/migrations/*.sql` |
| Data | `sqlite3` | `db/seed.sql` |

---

## 2. Set Up `.env`

```bash
cp .env.example .env
```

```bash
DATABASE_URL="sqlite:db/dev.sqlite3"
```

You need **dbmate** installed (lesson `020_database_migrations/01_install_dbmate`).

---

## 3. Step 1 — Migrations (Empty Tables)

```bash
dbmate up
```

Creates `db/dev.sqlite3`, applies both migrations, writes `db/schema.sql`.

Tables exist, **no rows** yet:

```bash
sqlite3 db/dev.sqlite3 "SELECT * FROM users;"
sqlite3 db/dev.sqlite3 "SELECT * FROM posts;"
```

Empty results.

---

## 4. Step 2 — Seed (Add Rows)

```bash
sqlite3 db/dev.sqlite3 < db/seed.sql
```

Check:

```bash
sqlite3 db/dev.sqlite3 "SELECT * FROM users;"
sqlite3 db/dev.sqlite3 "SELECT * FROM posts;"
```

2 users, 3 posts.

---

## 5. The Full Local Workflow

On a new machine, developers usually run:

```bash
cp .env.example .env
dbmate up
sqlite3 db/dev.sqlite3 < db/seed.sql
```

Always **migrations first**, **seed second**.

- `dbmate up` only changes **structure**
- `seed.sql` only adds **data** — do not put `INSERT`s in migration files

If you seed before migrating, SQLite errors: `no such table: users`.

---

## 6. Reset and Start Over

Wipe the database and rebuild:

```bash
dbmate drop
dbmate up
sqlite3 db/dev.sqlite3 < db/seed.sql
```

(`dbmate drop` is from lesson `020_database_migrations/06_dbmate_drop`.)

---

## 7. Cleaning Up

```bash
rm -f .env
rm -f db/dev.sqlite3 db/dev.sqlite3-shm db/dev.sqlite3-wal db/schema.sql
```

Keep `db/migrations/`, `db/seed.sql`, and `.env.example`.

Run again: `cp .env.example .env`, then steps in section 5.
