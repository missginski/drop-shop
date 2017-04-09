DROP TABLE if exists users CASCADE;
DROP TABLE if exists garments CASCADE;
DROP TABLE if exists conditions CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY,
  fname text,
  lname text,
  email text,
  location text
);

-- CREATE TABLE garments (
--   id serial PRIMARY KEY,
--   garment_name text,
--   weather_condition text
-- );

CREATE TABLE conditions (
  id serial PRIMARY KEY,
  name text,
  wind_cloud text,
  nowind_nocloud text,
  nowind_cloud text,
  wind_nocloud text
);


