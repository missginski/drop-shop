DROP TABLE if exists users CASCADE;
DROP TABLE if exists locations CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email text,
  password_digest text,
  name text,
  location_id integer REFERENCES locations (id)
);

CREATE TABLE locations (
  id serial PRIMARY KEY,
  location text
);





