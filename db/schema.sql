DROP TABLE if exists users CASCADE;
DROP TABLE if exists weather CASCADE;
DROP TABLE if exists garments CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email text,
  password_digest text,
  name text,
  location_id integer REFERENCES locations (id)
);

CREATE TABLE weather (
  id serial PRIMARY KEY,
  name text,
  description text
);

CREATE TABLE garments (
  id serial PRIMARY KEY,
  garment_name text,
  weather_id integer REFERENCES weather (id)
);






