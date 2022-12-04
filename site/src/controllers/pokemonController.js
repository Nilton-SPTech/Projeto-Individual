const { json } = require("express");
var pokemonModel = require("../models/pokemonModel");

function listar_pokemon(req, res){
    pokemonModel.listar_pokemon()
        .then(function (resultado){
            if(resultado.length > 0){
                res.status(200).json(resultado)
            }
            else{
                res.status(204).send("Nenhum resultado encontrado!")
            }
        })
        .catch(
            function (erro){
                console.log(erro)
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage)
                res.status(500).json(erro.sqlMessage)
            }
        )

}

function cadastrar_pokemon_usuario(req, res){
    var fkUsuario = req.body.usuarioServer 
    var fkPokemon = req.body.pokemonServer 

    pokemonModel.cadastrar_pokemon_usuario(fkUsuario, fkPokemon)
        .then(
            function(resultado){
                res.json(resultado)
            }
        ).catch(
            function(erro){
                console.log(erro)
                console.log("\n Houve um erro ao realizar o cadastro! Erro: " , erro.sqlMessage)
                res.status(500).json(erro.sqlMessage);
            }
        )
}

function listar_pokemon_usuario(req, res){
    var id = req.params.idUsuario

    pokemonModel.listar_pokemon_usuario(id)
        .then(function (resultado){
            res.status(200).json(resultado)
        })
        .catch(function (erro){
            console.log(erro)
            console.log("Houve um erro ao buscar o pokemon")
            res.status(500).json(erro.sqlMessage)
        })
}

function listar_pokemon_batalha(req, res){
    var idUsuario = req.body.usuarioServer 
    var idPokemon = req.body.pokemonServer 

    pokemonModel.listar_pokemon_batalha(idUsuario,idPokemon)
        .then(function (resultado){
            res.status(200).json(resultado)
        })
        .catch(function (erro){
            console.log(erro)
            console.log("Houve um erro ao buscar o pokemon")
            res.status(500).json(erro.sqlMessage)
        })
}


function listar_informacao_pokemon(req, res){
    var img = req.body.imgServer
    var idUsuario = req.body.usuarioServer 
    var idPokemon = req.body.pokemonServer
    
    pokemonModel.listar_informacao_pokemon(idUsuario, img, idPokemon)
        .then(function (resultado){
            res.status(200).json(resultado)
        })
        .catch(function(erro){
            console.log(erro)
            console.log("Houve um erro ao buscar o pokemon")
            res.status(500).json(erro.sqlMessage)
        })
}

function listar_pokemon_default(req, res){
    var img = req.params.imgPokemon

    pokemonModel.listar_pokemon_default(img)
        .then(function (resultado){
            res.status(200).json(resultado)
        })
        .catch(function(erro){
            console.log(erro)
            console.log("Houve um erro ao buscar o pokemon")
            res.status(500).json(erro.sqlMessage)
        })
}

function subir_level(req, res){
    var pokemon = req.body.pokemonServer 
    var usuario = req.body.usuarioServer
    pokemonModel.subir_level(pokemon, usuario)
        .then(function (resultado){
            res.status(200).json(resultado)
        })
        .catch(function(erro){
            console.log(erro)
            console.log("Houve um erro ao subir o nível")
            res.status(500).json(erro.sqlMessage)
        })
}

function somar_xp(req, res){
    var pokemon = req.body.pokemonServer 
    var usuario = req.body.usuarioServer
    var xp = req.body.xpServer

    pokemonModel.somar_xp(pokemon, usuario, xp)
        .then(function (resultado){
            res.status(200).json(resultado)
        })
        .catch(function (erro){
            console.log(erro)
            console.log("Houve um erro ao somar xp")
            res.status(500).json(erro.sqlMessage)
        })
}
module.exports = {
    listar_pokemon,
    cadastrar_pokemon_usuario,
    listar_pokemon_usuario,
    listar_pokemon_batalha,
    listar_informacao_pokemon,
    listar_pokemon_default,
    subir_level,
    somar_xp
}