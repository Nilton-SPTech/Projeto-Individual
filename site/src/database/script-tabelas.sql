-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

-- COMANDOS MYSQL PARA CRIAR O BANCO DE DADOS

CREATE DATABASE projetoIndividual; 
USE projetoIndividual; 

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT, 
	nome VARCHAR(45), 
	email VARCHAR(50), 
	senha VARCHAR(25), 
	pais VARCHAR(20), CONSTRAINT chkPais CHECK(pais IN ('Brasil', 'EUA')), 
	pontos INT
);


CREATE TABLE pokemon(
	idPokemon INT PRIMARY KEY AUTO_INCREMENT, 
	nome VARCHAR(45), 
	tipoPrimario VARCHAR(45),
	tipoSecundario VARCHAR(45),
	vidaTotal INT,
	descricao VARCHAR(60),
	ataqueFraco VARCHAR(45), 
	ataqueForte VARCHAR(45)
);


CREATE TABLE pokemonUsuario(
	batalhas INT, 
	fkUsuario INT, FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario), 
	fkPokemon INT, FOREIGN KEY (fkPokemon) REFERENCES pokemon(idPokemon),
	PRIMARY key(fkUsuario, fkPokemon)
);

CREATE TABLE imagemPokemon(
	idImagemPokemon INT AUTO_INCREMENT, 
	enderecoImagemFrente VARCHAR(50),
	enderecoImagemCosta VARCHAR(50),
	enderecoGif VARCHAR(50),
	fkPokemon INT UNIQUE, FOREIGN KEY (fkPokemon) REFERENCES pokemon(idPokemon),

	PRIMARY KEY(idImagemPokemon, fkPokemon)
);
