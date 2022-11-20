var express = require("express");
var router = express.Router();

var pokemonController = require("../controllers/pokemonController");


router.get("/listar_pokemon", function(req, res){
    pokemonController.listar_pokemon(req, res)
})


module.exports = router;
