-- ==============================================
-- 02_sqlite_hands_on/queries.sql
-- Run this inside the sqlite3 shell with:
--   .read queries.sql
-- Or from the terminal with:
--   sqlite3 dev.sqlite3 < queries.sql
--
-- Safe to run multiple times — drops and recreates the table each time.
-- ==============================================

-- 0. Reset (allows re-running without UNIQUE constraint errors)
DROP TABLE IF EXISTS users;

-- 1. Create the users table
CREATE TABLE users (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  name  TEXT    NOT NULL,
  email TEXT    NOT NULL UNIQUE
);

-- 2. Insert some rows
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
INSERT INTO users (name, email) VALUES ('Bob',   'bob@example.com');
INSERT INTO users (name, email) VALUES ('Carol', 'carol@example.com');

-- 3. Read all users
SELECT * FROM users;

-- 4. Filter to a single user
SELECT * FROM users WHERE name = 'Alice';

-- 5. Update a row
UPDATE users SET email = 'alice@updated.com' WHERE id = 1;

-- 6. Verify the update
SELECT * FROM users;

-- 7. Delete a row
DELETE FROM users WHERE name = 'Carol';

-- 8. Final state
SELECT * FROM users;
