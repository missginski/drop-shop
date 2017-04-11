-- weather
INSERT INTO weather
  (name, description)
VALUES
  ('COLD', '44 and below'),
  ('WARM', '45 to 84'),
  ('HOT', '85 and up'),
  ('RAIN', 'Y or N');

-- garments
INSERT INTO garments
  (garment_name, api_param, weather_id)
VALUES
  ('Puffy Coat', 'puffy+coat', 1),
  ('Tech-Friendly Gloves', 'tech+gloves', 1),
  ('Snow Boots,', 'snow+boots', 1),
  ('Leather Jacket', 'leather+jacket', 2),
  ('Denim Jacket', 'denim+jacket', 2),
  ('Fingerless Gloves', 'fingerless+gloves', 2),
  ('Scarf', 'scarf', 2),
  ('Flat Sandals', 'flat+sandals', 3),
  ('Tank Top', 'sun+hat', 3),
  ('Aviators', 'aviators', 3),
  ('Rubber Ankle Boots', 'rubber+ankle+boots', 4),
  ('Rain Coat', 'rain+coat', 4),
  ('Light Rain Coat', 'light+rain+coat', 4);

