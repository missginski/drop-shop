DROP TABLE if exists users CASCADE;
DROP TABLE if exists weather CASCADE;
DROP TABLE if exists garments CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email text UNIQUE,
  password_digest text,
  location text
);

CREATE TABLE weather (
  id serial PRIMARY KEY,
  name text,
  description text
);

CREATE TABLE garments (
  id serial PRIMARY KEY,
  garment_name text,
  api_param text,
  weather_id integer REFERENCES weather (id)
);


