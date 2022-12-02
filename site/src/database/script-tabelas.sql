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




-- SLQ SERVER

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY IDENTITY(1,1), 
	nome VARCHAR(45), 
	email VARCHAR(50), 
	senha VARCHAR(25), 
	pais VARCHAR(20), CONSTRAINT chkPais CHECK(pais IN ('Brasil', 'EUA')), 
	pontos INT
);


CREATE TABLE pokemon(
	idPokemon INT PRIMARY KEY IDENTITY(1,1), 
	nome VARCHAR(45), 
	tipoPrimario VARCHAR(45),
	tipoSecundario VARCHAR(45),
	vidaTotal INT,
	descricao VARCHAR(150),
	ataqueFraco VARCHAR(45), 
	ataqueForte VARCHAR(45)
);

CREATE TABLE pokemonUsuario(
	batalhas INT, 
	fkUsuario INT FOREIGN KEY REFERENCES usuario(idUsuario), 
	fkPokemon INT FOREIGN KEY REFERENCES pokemon(idPokemon),
	PRIMARY KEY(fkUsuario, fkPokemon)
);
ALTER TABLE pokemonUsuario ADD levelPokemon INT

CREATE TABLE imagemPokemon(
	idImagemPokemon INT IDENTITY(1,1), 
	enderecoImagemFrente VARCHAR(50),
	enderecoImagemCosta VARCHAR(50),
	enderecoGif VARCHAR(50),
	fkPokemon INT FOREIGN KEY REFERENCES pokemon(idPokemon) UNIQUE,

	PRIMARY KEY(idImagemPokemon, fkPokemon)
);


-- INSERT POKEMON
INSERT INTO pokemon VALUES
	('Pikachu', 'Elétrico', null, 50, 'Pikachu, o pokémon rato, ele pode gerar ataques elétricos de suas bolsas elétricas localizadas em suas bochechas.', 'Cabeçada', 'Choque do trovão'), 
	('Charmander', 'Fogo', null, 55, 'Pokémon Lagarto , Desde de seu nascimento , Charmander possui uma chama que queima na ponta de sua cauda.', 'Arranhão', 'Presas de fogo'), 
	('Bulbasaur', 'Planta','Veneno', 'Bulbasaur se assemelha a um pequeno anfíbio/sapo, mas carrega três garras em cada um de seus pés e não tem cauda.', 'Cabeçada', 'Chicote de vinha'),
	('Squirtle', 'Água', null, 'Squirtle é um pequeno Pokémon azul claro com aparência semelhante a uma tartaruga.', 'Cabeçada', 'Jato de água');


INSERT INTO imagemPokemon VALUES
	('pikachu-frente.png','pikachu-costa.png', 'pikachu-animacao.gif',1),
	('charmander-frente.png','charmander-costa.png', 'charmander-animacao.gif',2),
	('bulbassaur-frente.png','bulbassaur-costa.png', 'bulbassaur-animacao.gif',3);,
	('squirtle-frente.png','squirtle-costa.png', 'squirtle-animacao.gif',4);


INSERT INTO pokemon VALUES
	('Abra', 'Psiquico', null, 35, 'Este Pokémon usa seus poderes psíquicos enquanto dorme. O conteúdo dos sonhos de Abra afeta os poderes que o Pokémon possui.', 'Choque Psiquico', 'Devorador de sonhos'), 
	('Gastly', 'Fantasma', 'Tóxico', 40, 'Quase invisível, este Pokémon gasoso encobre o alvo e o coloca para dormir sem aviso prévio.', 'Lâmbida', 'Maldição'); 


INSERT INTO imagemPokemon VALUES
	('abra-frente.png','abra-costa.png', 'abra-animacao.gif',5),
	('gastly-frente.png','gastly-costa.png', 'gastly-animacao.gif',6);