-- migrate:up
CREATE TABLE comments (
  id      INTEGER PRIMARY KEY AUTOINCREMENT,
  post_id INTEGER NOT NULL,
  body    TEXT    NOT NULL,
  FOREIGN KEY (post_id) REFERENCES posts(id)
);

-- migrate:down
DROP TABLE IF EXISTS comments;