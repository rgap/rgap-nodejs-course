-- migrate:up
CREATE TABLE users (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  name  TEXT    NOT NULL,
  email TEXT    NOT NULL UNIQUE
);

-- migrate:down
DROP TABLE IF EXISTS users;
