# 00_what_are_migrations: Introduction to Database Migrations

In this lesson, you will learn what database migrations are, why they are essential in any real-world project, and how they solve the problem of evolving a database schema over time as a team.

---

## 1. The Problem: Databases Change Over Time

When you start a project, you create your database tables. But as the application grows, requirements change:

- You need to add a new column to a table
- A column needs to be renamed or its type changed
- A new table needs to be created to support a new feature
- An old table or column needs to be removed

If you apply these changes manually in your database client (e.g. pgAdmin, TablePlus, or the `sqlite3` CLI), **no one else on your team will know**. When your teammate pulls your code and runs the app, their database will be out of sync — and the app will crash or behave incorrectly.

This is the core problem migrations solve.

---

## 2. What is a Database Migration?

A **migration** is a versioned, incremental SQL script that describes a change to your database schema. Migrations are stored as files in your project, committed to Git alongside your code.

Every time you need to modify the structure of your database, you create a new migration file. These files are executed in chronological order to bring any database up to the correct, latest structure.

### Example migration file (`20240521120000_create_users.sql`):
```sql
CREATE TABLE users (
  id   INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT    NOT NULL,
  email TEXT   NOT NULL UNIQUE
);
```

---

## 3. How a Migration Tool Works

A migration tool (like **dbmate**, **Knex**, or **Prisma**) maintains a special table in your database (commonly named `schema_migrations`) that records which migrations have already been applied.

When you run the migration tool, it:
1. Reads all migration files from your project.
2. Checks the `schema_migrations` table to see which migrations have NOT yet been applied.
3. Runs the pending migrations in order.
4. Records each applied migration in the tracking table so it won't be run again.

This guarantees every developer and every production server always has the same schema.

---

## 4. Migration Tools Overview

| Tool | Type | Language | Notes |
| :--- | :--- | :--- | :--- |
| **dbmate** | CLI binary | Any (SQL files) | Simple, language-agnostic, uses plain SQL |
| **Knex** | npm library | JavaScript | Query builder + migrations for Node.js |
| **Prisma** | npm library | JavaScript/TypeScript | ORM with its own migration system |
| **Flyway** | CLI/Java tool | Any (SQL files) | Enterprise-grade, popular in Java ecosystems |
| **Liquibase** | CLI/Java tool | Any (XML/YAML/SQL) | Highly configurable, enterprise use |

In this section, we will use **dbmate** as our primary tool because:
- It uses plain SQL — no abstractions to learn first
- It is a single binary (no Node.js dependency)
- It works with SQLite, PostgreSQL, MySQL, and more

---

## 5. Key Terms

| Term | Meaning |
| :--- | :--- |
| **Schema** | The structure of your database: tables, columns, types, constraints |
| **Migration** | A versioned script describing one change to the schema |
| **Migration table** | A table in your DB tracking which migrations have been applied |
| **Seed** | Initial data inserted into the database (not a schema change) |
