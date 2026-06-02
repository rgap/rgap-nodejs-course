# PostgreSQL

**PostgreSQL**, often called **Postgres**, is a **database server**.

That means it runs as a separate program and your application connects to it using a connection URL.

Postgres is commonly used in real web applications because it can handle multiple users, multiple servers, larger datasets, permissions, backups, and production hosting.

---

## 1. What PostgreSQL Is

PostgreSQL is a relational database management system.

It stores data using familiar database concepts:

| Concept       | Meaning                                       |
| :------------ | :-------------------------------------------- |
| **Database**  | A container for your application data         |
| **Table**     | A structured collection of records            |
| **Row**       | One record inside a table                     |
| **Column**    | One field inside a row                        |
| **SQL**       | The language used to query and modify data    |
| **Migration** | A controlled change to the database structure |
| **Seed**      | Initial data inserted into the database       |

Example:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL,
  password TEXT NOT NULL
);
```

---

## 2. When Teams Pick PostgreSQL

Teams commonly choose PostgreSQL when:

- Several developers need to work with the same database
- The application will be deployed to production
- The data needs to be shared by multiple app servers
- The project needs users, roles, permissions, and backups
- The app may grow over time
- The hosting platform offers managed Postgres

Common platforms that support PostgreSQL include:

- Railway
- Render
- Heroku
- Supabase
- AWS RDS
- Google Cloud SQL
- Azure Database for PostgreSQL

---

## 3. What You Need Locally

To run lessons in this section you need:

1. **PostgreSQL** installed
2. **`psql`**, the PostgreSQL command-line tool
3. A database you can connect to, for example:

```txt
myapp_development
```

Example connection URL:

```bash
postgres://postgres:postgres@127.0.0.1:5432/myapp_development?sslmode=disable
```

---

## 4. Parts of the PostgreSQL URL

```bash
postgres://postgres:postgres@127.0.0.1:5432/myapp_development?sslmode=disable
```

| Part                | Meaning                                |
| :------------------ | :------------------------------------- |
| `postgres://`       | Protocol used to connect to PostgreSQL |
| `postgres:postgres` | Username and password                  |
| `127.0.0.1`         | Host, meaning your own computer        |
| `5432`              | Default PostgreSQL port                |
| `myapp_development` | Database name                          |
| `sslmode=disable`   | Disables SSL for local development     |

---

## 5. How the App Uses PostgreSQL

A Node.js app usually connects to PostgreSQL through a package like `pg`.

Example:

```bash
npm install pg
```

Then the app reads the connection URL from an `.env` file:

```env
DATABASE_URL=postgres://postgres:postgres@127.0.0.1:5432/myapp_development?sslmode=disable
```

The application uses that URL to send SQL queries to the PostgreSQL server.

Tiny mental picture:

```txt
Node.js app
   |
   | DATABASE_URL
   v
PostgreSQL server
   |
   v
myapp_development database
```
