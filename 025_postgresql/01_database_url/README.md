# The `DATABASE_URL` Connection String

Node apps and tools (dbmate, `connect-pg-simple`, `pg`) often read one env variable:

```bash
DATABASE_URL="postgres://postgres:postgres@127.0.0.1:5432/myapp_development?sslmode=disable"
```

---

## 1. Breaking Down the URL

```
     postgres   :// postgres:postgres@127.0.0.1:5432 / myapp_development ?sslmode=disable
└protocol/driver┘  └────user:pass───┘ └──host:port──┘ └──database name──┘└────query─────┘
```

Copy this into `.env` in the `connect-pg-simple` lesson and adjust for your machine.

---

## 2. Test With `psql`

If `psql` is installed:

```bash
psql "postgres://postgres:postgres@127.0.0.1:5432/myapp_development?sslmode=disable"
```

Inside `psql`:

```sql
\conninfo
\dt
\q
```

If connection fails, Postgres may not be running or the database may not exist yet. Create it (example):

```sql
CREATE DATABASE myapp_development;
```

(Run as a superuser, or use your GUI / Docker setup docs.)

---

## 3. Same Variable, Many Tools

| Tool                     | Uses `DATABASE_URL` for |
| :----------------------- | :---------------------- |
| **dbmate**               | Migrations              |
| **pg** (`node-postgres`) | Queries from Node       |
| **connect-pg-simple**    | Session storage table   |

One `.env` file can feed your whole stack — as long as everything points at the same database.
