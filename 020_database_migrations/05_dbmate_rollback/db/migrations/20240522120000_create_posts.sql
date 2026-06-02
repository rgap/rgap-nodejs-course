-- migrate:up
CREATE TABLE posts (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER NOT NULL,
  title   TEXT    NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- migrate:down
DROP TABLE IF EXISTS posts;
