# 01_sql_basics: Your First SQL Statements

In this lesson, you will learn the four fundamental SQL commands that cover nearly every operation you will ever do on a database.

---

## 1. What is SQL?

**SQL** (Structured Query Language) is the language used to communicate with relational databases. It is not a programming language like JavaScript — it is a **query language** designed specifically for reading, writing, and managing data.

SQL is standardized, so most of what you learn here applies to SQLite, PostgreSQL, MySQL, and others.

---

## 2. The Four Core Operations (CRUD)

Every database interaction maps to one of four operations:

| Operation | SQL Command | Meaning |
| :--- | :--- | :--- |
| **Create** | `INSERT` | Add new rows |
| **Read** | `SELECT` | Query and retrieve rows |
| **Update** | `UPDATE` | Modify existing rows |
| **Delete** | `DELETE` | Remove rows |

---

## 3. CREATE TABLE

Before inserting data, you must define the structure of your table:

```sql
CREATE TABLE users (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  name       TEXT    NOT NULL,
  email      TEXT    NOT NULL UNIQUE,
  created_at TEXT    NOT NULL DEFAULT (datetime('now'))
);
```

- `INTEGER PRIMARY KEY AUTOINCREMENT` — auto-generates a unique ID for each row
- `TEXT NOT NULL` — a text column that cannot be empty
- `UNIQUE` — no two rows can have the same value in this column
- `DEFAULT (datetime('now'))` — automatically sets the current timestamp if no value is given

---

## 4. INSERT — Add a Row

```sql
INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
INSERT INTO users (name, email) VALUES ('Bob',   'bob@example.com');
```

We do not need to specify `id` or `created_at` because they have defaults.

---

## 5. SELECT — Read Rows

```sql
-- Get all columns from all rows
SELECT * FROM users;

-- Get specific columns
SELECT name, email FROM users;

-- Filter with WHERE
SELECT * FROM users WHERE name = 'Alice';

-- Sort results
SELECT * FROM users ORDER BY created_at DESC;

-- Limit the number of rows returned
SELECT * FROM users LIMIT 1;
```

---

## 6. UPDATE — Modify a Row

```sql
UPDATE users SET email = 'alice@newdomain.com' WHERE id = 1;
```

> [!WARNING]
> Always include a `WHERE` clause with `UPDATE`. Without it, every row in the table will be updated.

---

## 7. DELETE — Remove a Row

```sql
DELETE FROM users WHERE id = 2;
```

> [!WARNING]
> Always include a `WHERE` clause with `DELETE`. Without it, all rows in the table will be deleted.

---

## 8. Verification Exercise

We have provided a file `queries.sql` in this folder with all the SQL statements from this lesson, ready to run.

In the next lesson, you will open a real SQLite database with the `sqlite3` command-line tool and execute these statements interactively.
