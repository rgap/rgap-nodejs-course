-- This script runs at first container startup only

-- Create the database
CREATE DATABASE IF NOT EXISTS compose_test;

-- Select the database
USE compose_test;

-- Create the visits table
CREATE TABLE IF NOT EXISTS visits (
  id INT AUTO_INCREMENT PRIMARY KEY,
  time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  message VARCHAR(255)
);

-- Insert seed data
INSERT INTO visits (message) VALUES
  ('Seed visit 1'),
  ('Seed visit 2');
