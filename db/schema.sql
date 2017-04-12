DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS venues;


CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255),
  team_name VARCHAR(255)
);

CREATE TABLE venues(
  id SERIAL PRIMARY KEY,
  venues VARCHAR(255),
  name VARCHAR(255),
  market VARCHAR(255),
  capacity INTEGER,
  surface VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  zip VARCHAR(255),
  country VARCHAR(255)
)
