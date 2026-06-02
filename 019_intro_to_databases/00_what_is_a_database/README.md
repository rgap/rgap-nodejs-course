# 00_what_is_a_database: Databases, Tables, Rows, and Columns

In this lesson, you will learn what a database is and how data is organized inside it. No prior experience is required.

---

## 1. What is a Database?

A **database** is an organized collection of data stored on disk so it can be retrieved, updated, and queried efficiently.

Think of a database like a filing cabinet. Instead of physical folders and sheets of paper, you have **tables** containing structured **rows** of data.

---

## 2. What is a Table?

A **table** is the basic unit of storage in a relational database. It looks exactly like a spreadsheet:

| id | name  | email              | created_at          |
|----|-------|--------------------|---------------------|
| 1  | Alice | alice@example.com  | 2024-05-21 12:00:00 |
| 2  | Bob   | bob@example.com    | 2024-05-21 12:05:00 |

- Each **column** (vertical) defines a piece of data: `id`, `name`, `email`, `created_at`
- Each **row** (horizontal) is one record — one user in this case

---

## 3. Key Vocabulary

| Term | Meaning |
| :--- | :--- |
| **Database** | The top-level container. Holds one or more tables. |
| **Table** | A named grid of data, like a spreadsheet tab. |
| **Column** | A named field. Defines the type of data stored (e.g. text, number, date). |
| **Row** | One record in a table. |
| **Primary Key** | A unique identifier for each row (usually `id`). No two rows can have the same value. |
| **Data Type** | The kind of value a column holds: `TEXT`, `INTEGER`, `REAL`, `BOOLEAN`, `DATE`, etc. |

---

## 4. What is a Relational Database?

A **relational database** stores data in multiple related tables. You link tables together using **foreign keys** — a column in one table that references the primary key of another.

**Example:** A `posts` table where each post belongs to a user:

**users table:**
| id | name  |
|----|-------|
| 1  | Alice |
| 2  | Bob   |

**posts table:**
| id | user_id | title         |
|----|---------|---------------|
| 1  | 1       | My First Post |
| 2  | 1       | Second Post   |
| 3  | 2       | Hello World   |

The `user_id` column in `posts` is a **foreign key** that points to the `id` column in `users`. This is the "relation" that gives relational databases their name.

---

## 5. Common Relational Databases

| Database | Notes |
| :--- | :--- |
| **SQLite** | Lightweight, stored in a single file. Perfect for learning and small apps. |
| **PostgreSQL** | Full-featured, open-source. Industry standard for production apps. |
| **MySQL / MariaDB** | Very popular in web hosting environments. |
| **SQL Server** | Microsoft's enterprise database. |

> [!NOTE]
> In this course, we use **SQLite** because it requires no server setup — the entire database is a single `.sqlite3` file on your disk.

---

## 6. No Exercise Yet

This lesson is purely conceptual. In the next lesson, you will write your first SQL statements to create a table and insert data into it.
