DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS team_name;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255),
  team_name VARCHAR(255)
);
