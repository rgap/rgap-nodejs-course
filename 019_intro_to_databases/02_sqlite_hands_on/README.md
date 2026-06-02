# 02_sqlite_hands_on: Using the sqlite3 CLI

In this lesson, you will use the `sqlite3` command-line tool to create a real database file, run SQL commands interactively, and execute an SQL script from a file.

---

## 1. Installing sqlite3

### macOS
SQLite is pre-installed on macOS. Verify it:
```bash
sqlite3 --version
```

If missing, install via Homebrew:
```bash
brew install sqlite
```

### Linux (Ubuntu/Debian)
```bash
sudo apt install sqlite3
```

---

## 2. Opening / Creating a Database

To open (or create) a SQLite database file:
```bash
sqlite3 dev.sqlite3
```

If `dev.sqlite3` doesn't exist, SQLite creates it automatically. You will see the interactive prompt:
```
SQLite version 3.x.x
Enter ".help" for usage hints.
sqlite>
```

---

## 3. Useful Dot Commands

Inside the `sqlite3` shell, commands starting with `.` are special control commands (not SQL):

| Command | What it does |
| :--- | :--- |
| `.tables` | List all tables in the database |
| `.schema` | Show the SQL used to create all tables |
| `.schema users` | Show the SQL for a specific table |
| `.mode column` | Format output as aligned columns |
| `.headers on` | Show column names in query results |
| `.quit` | Exit the sqlite3 shell |

---

## 4. Running SQL Interactively

Inside the `sqlite3` shell, type SQL directly:
```sql
sqlite> CREATE TABLE users (
   ...>   id    INTEGER PRIMARY KEY AUTOINCREMENT,
   ...>   name  TEXT NOT NULL,
   ...>   email TEXT NOT NULL UNIQUE
   ...> );

sqlite> INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');

sqlite> SELECT * FROM users;
1|Alice|alice@example.com
```

> [!TIP]
> Turn on headers and column mode for nicer output:
> ```
> sqlite> .headers on
> sqlite> .mode column
> sqlite> SELECT * FROM users;
> id  name   email
> --  -----  -----------------
> 1   Alice  alice@example.com
> ```

---

## 5. Running a SQL File

Instead of typing commands one by one, you can run an entire `.sql` file:
```bash
sqlite3 dev.sqlite3 < queries.sql
```

Or from inside the shell:
```
sqlite> .read queries.sql
```

---

## 6. Verification Exercise

1. Open a new database:
   ```bash
   sqlite3 dev.sqlite3
   ```

2. Enable nice formatting:
   ```
   .headers on
   .mode column
   ```

3. Run the provided SQL file:
   ```
   .read queries.sql
   ```

4. Verify the tables and data:
   ```sql
   .tables
   SELECT * FROM users;
   ```

5. Exit:
   ```
   .quit
   ```

6. Confirm the database file exists on disk:
   ```bash
   ls -lh dev.sqlite3
   ```
