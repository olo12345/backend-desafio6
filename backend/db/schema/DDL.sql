-- CREATE DATABASE CREATE TABLE usuarios (
--     id SERIAL PRIMARY KEY,
--     nombre VARCHAR(50) NOT NULL,
--     apellido VARCHAR(50) NOT NULL,
--     email VARCHAR(50) NOT NULL,
--     password VARCHAR(100) NOT NULL,
--     create_at TIMESTAMP NOT NULL DEFAULT NOW(),
--     update_at TIMESTAMP NOT NULL DEFAULT NOW()
-- );

CREATE TABLE usuarios (
    id SERIAL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(60) NOT NULL,
    rol VARCHAR(25),
    lenguage VARCHAR(20) );