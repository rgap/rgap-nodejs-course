# 02_first_migration: Your First Migration

In this lesson, you will apply a real migration file with dbmate, create a SQLite database on disk, and verify that dbmate recorded the migration in `schema_migrations`.

---

## 1. The Migration File

Migrations live in `db/migrations/`. Each file name starts with a **timestamp** so files always run in the same order on every machine:

```
20240521120000_create_users.sql
└─ version ─┘ └─ description ─┘
```

Open the provided file. The part that runs when you use `dbmate up` is marked `-- migrate:up`:

```sql
-- migrate:up
CREATE TABLE users (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  name  TEXT    NOT NULL,
  email TEXT    NOT NULL UNIQUE
);
```

This SQL creates the `users` table.

---

## 2. Set Up Your Environment

From this lesson folder:

```bash
cp .env.example .env
```

Your `.env` should contain:

```bash
DATABASE_URL="sqlite:db/dev.sqlite3"
```

---

## 3. Run the Migration

```bash
dbmate up
```

Typical output:

```
Creating: db/dev.sqlite3
Applying: 20240521120000_create_users.sql
Applied: 20240521120000_create_users.sql in ...
Writing: ./db/schema.sql
```

Inside "db" folder because the DATABASE_URL is set to "sqlite:db/dev.sqlite3" in the .env file.

What happened:

1. **Creating** — dbmate created `db/dev.sqlite3` because it did not exist yet
2. **Applying** — it ran the SQL inside `-- migrate:up`
3. **Writing** — it wrote `db/schema.sql` (see below)

> [!NOTE]
> If you see `Writing: ./db/schema.sql` skipped or a warning about `sqlite3`, install SQLite CLI (see `019_intro_to_databases/02_sqlite_hands_on`). The migration itself still applied; only the schema dump step needs the CLI.

---

## 4. What is `db/schema.sql`?

After migrations run, dbmate dumps your **entire current database structure** into `db/schema.sql`.

| | `db/migrations/*.sql` | `db/schema.sql` |
| :--- | :--- | :--- |
| **What it is** | Steps to build the schema (one file per change) | Snapshot of the schema **right now** |
| **Written by** | You (or `dbmate new`) | dbmate automatically, after `dbmate up` |
| **Contains** | `-- migrate:up` SQL (one change per file) | Plain SQL: all `CREATE TABLE` statements, indexes, etc. |

Open it:

```bash
cat db/schema.sql
```

You should see the `users` table definition — the result of your migration, not the migration file itself.

**Why it exists:** teammates (and you) can read one file to see the full shape of the database without opening SQLite. dbmate **regenerates** it every time you run `dbmate up`.

It is generated locally (like `dev.sqlite3`). You can delete it when cleaning up; `dbmate up` will create it again.

---

## 5. Check Migration Status

```bash
dbmate status
```

You should see `20240521120000_create_users.sql` marked as applied.

---

## 6. Inspect the Database

### Option A: sqlite3 CLI

```bash
sqlite3 db/dev.sqlite3
```

Inside the shell:

```sql
.headers on
.mode column

.tables
.schema users
SELECT * FROM schema_migrations;
.quit
```

### Expected: `schema_migrations`

dbmate creates this table automatically. It stores which migration versions have been applied:

```sql
SELECT * FROM schema_migrations;
```

You should see a row with version `20240521120000` (the numeric prefix of the file name).

### Expected: `users`

The `users` table exists but has **no rows** yet — migrations define **structure**, not sample data. Inserting rows is done separately (seeds or application code).

```sql
.schema users
```

---

## 7. What does `dbmate up` do?

When you run:

```bash
dbmate up
```

dbmate:

- Reads `DATABASE_URL` from `.env` and opens (or creates) `db/dev.sqlite3`
- Finds every `.sql` file in `db/migrations/` that is **not** in `schema_migrations` yet
- Runs them in order (oldest timestamp first), executing the `-- migrate:up` SQL in each file
- Saves each version in `schema_migrations` so it will not run again
- Regenerates `db/schema.sql` (a snapshot of the full schema)

In later lessons you will run `dbmate up` again when new migration files appear — only the new ones run.

---

## 8. Cleaning Up (Reset the Lesson)

Everything below was **created by commands**, not shipped with the repo. Remove it when you are done experimenting so the folder matches a fresh clone:

| File / folder | Created by |
| :--- | :--- |
| `.env` | `cp .env.example .env` |
| `db/dev.sqlite3` | `dbmate up` |
| `db/dev.sqlite3-shm`, `db/dev.sqlite3-wal` | SQLite WAL mode (may appear while the DB is open) |
| `db/schema.sql` | `dbmate up` (schema dump) |

**Do not delete** `db/migrations/20240521120000_create_users.sql` or `.env.example` — those are part of the lesson.

From inside `02_first_migration`:

```bash
rm -f .env
rm -f db/dev.sqlite3 db/dev.sqlite3-shm db/dev.sqlite3-wal db/schema.sql
```

To confirm a clean state:

```bash
ls -la db/
# Should only show: migrations/
```

You can always recreate everything later with `cp .env.example .env` and `dbmate up`.
