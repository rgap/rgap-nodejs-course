# 04_dbmate_new: Create a Migration With `dbmate new`

Lessons 02 and 03 used migration files that were already in the repo. Here you **create** one yourself.

### What does `dbmate new` do?

```bash
dbmate new create_comments
```

- Creates `db/migrations/` if it does not exist yet
- Adds a new `.sql` file with today's timestamp in the name (e.g. `20240523143000_create_comments.sql`)
- Fills it with empty `-- migrate:up` and `-- migrate:down` sections for you to write SQL into

You still run `dbmate up` afterward to apply it.

---

## 1. Start From the First Two Migrations

This folder already has `users` and `posts`. Apply them first:

```bash
cp .env.example .env
dbmate up
dbmate status
```

You should see two `[X]` lines.

---

## 2. Create a New Migration File

```bash
dbmate new create_comments
```

dbmate creates `db/migrations/` (if needed) and a new file with a **timestamp** in the name, for example:

```
db/migrations/20240523143000_create_comments.sql
```

Your exact number will differ. That is normal.

The file starts with empty sections:

```sql
-- migrate:up

-- migrate:down
```

---

## 3. Add Your SQL

Open the new file and paste this into the `migrate:up` / `migrate:down` sections:

```sql
-- migrate:up
CREATE TABLE comments (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL,
  body    TEXT    NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

-- migrate:down
DROP TABLE IF EXISTS comments;
```

Save the file.

---

## 4. Apply It

```bash
dbmate up
```

Only the **new** file should run. The first two are skipped (already in `schema_migrations`).

```bash
dbmate status
```

All three should show `[X]`.

---

## 5. Peek

```bash
sqlite3 db/dev.sqlite3 ".tables"
```

Expected: `comments`, `posts`, `schema_migrations`, `users`

```bash
sqlite3 db/dev.sqlite3 "SELECT * FROM schema_migrations;"
```

Three rows — one per migration file.

---

## 6. Cleaning Up

```bash
rm -f .env
rm -f db/dev.sqlite3 db/dev.sqlite3-shm db/dev.sqlite3-wal db/schema.sql
rm -f db/migrations/[0-9]*_create_comments.sql
```

The last line removes the migration file **you** created with `dbmate new` (your timestamp will differ — use tab-completion or `ls db/migrations/` first).

Keep the two files that shipped with this lesson:

- `20240521120000_create_users.sql`
- `20240522120000_create_posts.sql`

Run the lesson again: `cp .env.example .env`, `dbmate up`, then `dbmate new` from step 2.
