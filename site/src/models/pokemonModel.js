var database = require("../database/config")

function listar_pokemon(){
    var instrucao = `SELECT * FROM pokemon 
                    JOIN imagemPokemon ON idPokemon = fkPokemon`

    console.log("Executando a instrução SQL \n" + instrucao)

    return database.executar(instrucao)
}

module.exports = {
    listar_pokemon
}