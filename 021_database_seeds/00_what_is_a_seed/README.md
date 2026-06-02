# 00_what_is_a_seed: What Is a Database Seed?

A database has two parts:

1. **Structure** — which tables and columns exist (`CREATE TABLE`)
2. **Data** — the rows inside those tables (`INSERT INTO`)

A **seed** is a SQL file full of `INSERT` statements that adds **starter rows** for local development.

**Seeding** is the act of running that file against your database — loading the starter data in. People say:

- "Run the seed"
- "Seed the database"
- "I'm seeding my local DB"

Same idea: execute `seed.sql` (or similar) so your tables are not empty.

---

## 1. Structure vs Seed Data

| | Structure (setup) | Seed |
| :--- | :--- | :--- |
| **Purpose** | Define tables | Fill tables with rows |
| **SQL examples** | `CREATE TABLE` | `INSERT INTO` |
| **Typical file** | `setup.sql` | `seed.sql` |

Example:

- **Setup:** `CREATE TABLE users (...)` — empty table
- **Seed:** `INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');` — adds Alice

Lessons **01** and **02** use `setup.sql` for tables so you can focus on seeding. Lesson **03** uses **dbmate** for structure (like a real project). See `020_database_migrations` for dbmate details.

---

## 2. Why Use Seeds?

On a fresh dev machine you often want:

- A few test users so the app is not empty
- The same starter data for every developer
- Data you can reload after experiments

Commit `seed.sql` to Git. Everyone runs the same inserts.

---

## 3. Keep Seeds Separate

Do **not** mix lots of `INSERT` statements into your structure/setup files.

- Structure files change rarely and must stay clear
- Seed data changes often (new test users, sample posts, etc.)

Typical layout (with dbmate):

```
db/
├── dev.sqlite3     ← generated, not committed
├── migrations/     ← schema (dbmate up)
└── seed.sql        ← starter rows (run after migrations)
```

---

## 4. How You Seed the Database

Seeding is plain SQL — no special tool required. You run the seed file with the `sqlite3` CLI (from `019_intro_to_databases`):

```bash
sqlite3 db/dev.sqlite3 < db/seed.sql
```

---

## 5. What Comes Next

- `01_first_seed` — one table, `setup.sql` + `seed.sql` with `sqlite3`
- `02_seed_two_tables` — users and posts (insert order matters for foreign keys)
- `03_dbmate_and_seed` — `dbmate up` then `seed.sql` (migrations + seeding together)
- `04_npm_scripts` — same workflow via `npm run migrate`, `db:seed`, `db:reset`, etc.
