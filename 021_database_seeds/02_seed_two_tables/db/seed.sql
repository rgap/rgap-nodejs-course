-- Starter data. Insert parents (users) before children (posts).

INSERT INTO users (name, email) VALUES ('Alice', 'alice@example.com');
INSERT INTO users (name, email) VALUES ('Bob',   'bob@example.com');

INSERT INTO posts (user_id, title) VALUES (1, 'Alice first post');
INSERT INTO posts (user_id, title) VALUES (1, 'Alice second post');
INSERT INTO posts (user_id, title) VALUES (2, 'Bob only post');
