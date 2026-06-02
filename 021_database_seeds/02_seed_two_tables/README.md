# 02_seed_two_tables: Seed Related Tables

Lesson 01 seeded one table. Here you seed **`users`** and **`posts`**, where each post belongs to a user.

---

## 1. Files in This Lesson

```
02_seed_two_tables/db/
├── setup.sql   ← CREATE TABLE users + posts
└── seed.sql    ← INSERT users first, then posts
```

---

## 2. Create the Tables

```bash
sqlite3 db/dev.sqlite3 < db/setup.sql
```

Both tables exist, both empty:

```bash
sqlite3 db/dev.sqlite3 "SELECT * FROM users;"
sqlite3 db/dev.sqlite3 "SELECT * FROM posts;"
```

---

## 3. Run the Seed

```bash
sqlite3 db/dev.sqlite3 < db/seed.sql
```

Check both tables:

```bash
sqlite3 db/dev.sqlite3 "SELECT * FROM users;"
sqlite3 db/dev.sqlite3 "SELECT * FROM posts;"
```

You should see 2 users and 3 posts.

---

## 4. Order Matters (Inside the Seed Too)

`posts.user_id` points at `users.id` (a **foreign key**). The parent rows must exist first.

In `seed.sql`:

1. **Insert users** — Alice gets `id` 1, Bob gets `id` 2
2. **Insert posts** — use `user_id` 1 and 2

If you insert a post before any user, SQLite errors: `FOREIGN KEY constraint failed`.

Same rule as lesson 01: **`setup.sql` before `seed.sql`**, and inside the seed file: **parents before children**.

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
