CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: role
CREATE TABLE IF NOT EXISTS role (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    libelle VARCHAR(50) NOT NULL
);

-- Table: utilisateur
CREATE TABLE IF NOT EXISTS utilisateur (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    password TEXT NOT NULL,
    email VARCHAR(100) NOT NULL,
    livraison VARCHAR(255) NOT NULL,
    idRole UUID,
    FOREIGN KEY (idRole) REFERENCES role(id)
);

-- Table: etat
CREATE TABLE IF NOT EXISTS etat (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    libelle VARCHAR(50) NOT NULL,
    utilisateur VARCHAR(50) NOT NULL
);

-- Table: contact
CREATE TABLE IF NOT EXISTS contact (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    message VARCHAR(100) NOT NULL
);

-- Table: categories
CREATE TABLE IF NOT EXISTS categories (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    nom VARCHAR(255) NOT NULL
);