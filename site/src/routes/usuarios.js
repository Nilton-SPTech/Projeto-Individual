var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/listar_ranking", function(req, res){
    usuarioController.listar_ranking(req,res); 
});

router.get("/listar_usuario/:idUsuario", function(req, res){
    usuarioController.listar_usuario(req,res)
});


router.get("/listar_pokemon_usuario/:idUsuario", function(req, res){
    usuarioController.listar_pokemon_usuario(req,res)
})

module.exports = router;