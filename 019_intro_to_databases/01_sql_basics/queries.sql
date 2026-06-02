-- ==============================================
-- 01_sql_basics/queries.sql
-- All SQL from the lesson, ready to run.
-- ==============================================

-- 1. Create the table
CREATE TABLE users (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT    NOT NULL,
  email      TEXT    NOT NULL UNIQUE,
  created_at TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- 2. Insert rows
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
INSERT INTO users (name, email) VALUES ('Bob',   'bob@example.com');

-- 3. Select all rows
SELECT * FROM users;

-- 4. Select specific columns
SELECT name, email FROM users;

-- 5. Filter with WHERE
SELECT * FROM users WHERE name = 'Alice';

-- 6. Update a row (be careful: always use WHERE!)
UPDATE users SET email = 'alice@newdomain.com' WHERE id = 1;

-- 7. Verify the update
SELECT * FROM users WHERE id = 1;

-- 8. Delete a row (be careful: always use WHERE!)
DELETE FROM users WHERE id = 2;

-- 9. Verify the deletion
SELECT * FROM users;
