# 05_dbmate_rollback: Undo the Last Migration

Sometimes you need to **undo** the most recent schema change on your local machine — for example while testing.

That is what `dbmate rollback` is for.

`dbmate down` is the **same command** (an alias). You can use either name:

```bash
dbmate rollback
# same as:
dbmate down
```

---

## 1. Two Migration Files (Same as Lesson 03)

```
db/migrations/
├── 20240521120000_create_users.sql
└── 20240522120000_create_posts.sql
```

Each file has a `-- migrate:down` section that reverses its `-- migrate:up`.

---

## 2. Set Up and Apply Both

```bash
cp .env.example .env
dbmate up
dbmate status
```

Both should show `[X]`.

```bash
sqlite3 db/dev.sqlite3 ".tables"
sqlite3 db/dev.sqlite3 "SELECT * FROM schema_migrations;"
```

**Tables:** `posts`, `schema_migrations`, `users`

**`schema_migrations`:** two rows — `20240521120000` and `20240522120000`

---

## 3. Roll Back the Last Migration

### What does `dbmate rollback` / `dbmate down` do?

```bash
dbmate rollback
```

(or `dbmate down` — identical)

- Finds the **most recently applied** migration
- Runs its `-- migrate:down` SQL (here: `DROP TABLE posts`)
- Removes that version from `schema_migrations`
- Regenerates `db/schema.sql`

Only **one** migration per command — the last one (`create_posts`), not `create_users`.

Check:

```bash
dbmate status
```

`create_posts` should no longer be `[X]`.

```bash
sqlite3 db/dev.sqlite3 ".tables"
sqlite3 db/dev.sqlite3 "SELECT * FROM schema_migrations;"
```

**Tables:** `schema_migrations`, `users` — **no** `posts`

**`schema_migrations`:** one row — only `20240521120000` (`create_users` still applied, `create_posts` removed)

---

## 4. Apply It Again

```bash
dbmate up
```

Only `create_posts` runs again (it was pending after rollback).

```bash
sqlite3 db/dev.sqlite3 ".tables"
```

`posts` is back.

---

## 5. Peek at `schema_migrations`

```bash
sqlite3 db/dev.sqlite3 "SELECT * FROM schema_migrations;"
```

Two rows again after step 4.

---

## 6. Cleaning Up

```bash
rm -f .env
rm -f db/dev.sqlite3 db/dev.sqlite3-shm db/dev.sqlite3-wal db/schema.sql
```

Keep `db/migrations/` and `.env.example`.

Run again: `cp .env.example .env` then `dbmate up`.
