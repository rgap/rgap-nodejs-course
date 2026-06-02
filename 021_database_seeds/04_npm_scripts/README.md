# 04_npm_scripts: Migrations and Seeds via `package.json`

Lesson 03 ran `dbmate` and `sqlite3` by hand. Teams wrap those commands in **npm scripts** so everyone runs the same shortcuts.

---

## 1. `package.json` Scripts

```json
{
  "scripts": {
    "migrate": "dbmate up",
    "migrate:down": "dbmate down",
    "migrate:status": "dbmate status",
    "migrate:new": "dbmate new",
    "db:seed": "dotenv -- sh -c 'sqlite3 \"$SQLITE_DB_PATH\" < db/seed.sql'",
    "db:reset": "dbmate drop && dbmate up && npm run db:seed"
  }
}
```

| Script | Command | What it does |
| :--- | :--- | :--- |
| `migrate` | `dbmate up` | Apply pending migrations (create/update tables) |
| `migrate:down` | `dbmate down` | Undo the last migration (alias of `rollback`) |
| `migrate:status` | `dbmate status` | List applied vs pending migration files |
| `migrate:new` | `dbmate new` | Create a new empty migration file (needs a name — see below) |
| `db:seed` | `sqlite3` + `seed.sql` | Insert starter rows |
| `db:reset` | drop → up → seed | Wipe DB, rebuild schema, re-seed |

Custom scripts use `npm run <name>` (see `002_npm_theory/02_npm_scripts`).

---

## 2. PostgreSQL vs SQLite in These Scripts

In many Node + **PostgreSQL** projects you see:

```json
"db:seed": "dotenv -- sh -c 'psql $DATABASE_URL -f db/seed.sql'"
```

- **`psql`** is the Postgres CLI — it accepts a connection URL like `postgres://...`
- **`dotenv`** loads variables from `.env` before the command runs

For **SQLite** in this course:

- **`dbmate`** still uses `DATABASE_URL="sqlite:db/dev.sqlite3"` (same as lesson 03)
- **`sqlite3`** wants a **file path**, not a `sqlite:` URL — so `.env` also has `SQLITE_DB_PATH=db/dev.sqlite3`

```json
"db:seed": "dotenv -- sh -c 'sqlite3 \"$SQLITE_DB_PATH\" < db/seed.sql'"
```

Same pattern: load `.env`, run the database CLI, execute `db/seed.sql`.

---

## 3. Install

From this lesson folder:

```bash
npm install
```

Installs **`dbmate`** and **`dotenv-cli`** into `node_modules/`. npm scripts find `dbmate` on your PATH via `node_modules/.bin/`.

---

## 4. Set Up `.env`

```bash
cp .env.example .env
```

---

## 5. Migrate, Then Seed

```bash
npm run migrate
npm run db:seed
```

Check:

```bash
sqlite3 db/dev.sqlite3 "SELECT * FROM users;"
sqlite3 db/dev.sqlite3 "SELECT * FROM posts;"
```

2 users, 3 posts.

---

## 6. Other Scripts

**Status:**

```bash
npm run migrate:status
```

**Undo last migration:**

```bash
npm run migrate:down
```

**New migration file** — pass the name after `--`:

```bash
npm run migrate:new -- create_comments
```

Creates `db/migrations/<timestamp>_create_comments.sql`. Fill in SQL, then `npm run migrate`.

**Full reset** (drop database, migrate, seed):

```bash
npm run db:reset
```

---

## 7. Typical Workflow

New teammate:

```bash
cp .env.example .env
npm install
npm run db:reset
```

Day to day after pulling new migrations:

```bash
npm run migrate
npm run db:seed
```

(Only seed if you need fresh data — running seed twice may hit `UNIQUE` errors on emails.)

---

## 8. Cleaning Up

```bash
rm -f .env
rm -f db/dev.sqlite3 db/dev.sqlite3-shm db/dev.sqlite3-wal db/schema.sql
rm -rf node_modules package-lock.json
```

Keep `package.json`, `db/migrations/`, `db/seed.sql`, and `.env.example`.

Run again: `npm install`, `cp .env.example .env`, `npm run db:reset`.
