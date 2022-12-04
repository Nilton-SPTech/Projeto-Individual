var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");


router.get("/listar_pokemon", function(req, res){
    pokemonController.listar_pokemon(req, res)
})

router.post("/cadastrar_pokemon_usuario", function(req, res){
    pokemonController.cadastrar_pokemon_usuario(req,res)
})

router.get("/listar_pokemon_usuario/:idUsuario", function (req, res){
    pokemonController.listar_pokemon_usuario(req,res)
})

router.post("/listar_pokemon_batalha", function (req, res){
    pokemonController.listar_pokemon_batalha(req,res)
})

router.post("/listar_informacao_pokemon", function(req, res){
    pokemonController.listar_informacao_pokemon(req, res)
})

router.get("/pegar_idPokemon/:imgPokemon", function(req, res){
    pokemonController.listar_pokemon_default(req, res)
})

router.post("/subir_level", function(req, res){
    pokemonController.subir_level(req, res)
})

module.exports = router;
