var database = require("../database/config")

function listar_pokemon(){
    var instrucao = `SELECT * FROM pokemon 
                    JOIN imagemPokemon ON idPokemon = fkPokemon`

    console.log("Executando a instrução SQL \n" + instrucao)

    return database.executar(instrucao)
}

function cadastrar_pokemon_usuario(fkUsuario, fkPokemon){
    var instrucao = `
        INSERT INTO pokemonUsuario(fkUsuario, fkPokemon) VALUES
            (${fkUsuario},${fkPokemon})
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listar_pokemon_usuario(id_usuario){
    var instrucao = `
    SELECT  p.*, i.* FROM usuario u 
    INNER JOIN pokemonUsuario pu ON u.idUsuario = pu.fkUsuario 
    INNER JOIN pokemon p ON p.idPokemon = pu.fkPokemon 
    INNER JOIN imagemPokemon i ON p.idPokemon = i.fkPokemon 
    WHERE u.idUsuario = ${id_usuario}
    `

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar_pokemon,
    cadastrar_pokemon_usuario,
    listar_pokemon_usuario
}