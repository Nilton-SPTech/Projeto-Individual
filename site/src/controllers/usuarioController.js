var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send(true);
                    } else {
                        res.status(403).send(false);
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var pais = req.body.paisServer;
    var personagem = req.body.personagemServer

    // Faça as validações dos valores

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    usuarioModel.cadastrar(nome, email, senha, pais,personagem)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function listar_ranking(req,res){
    usuarioModel.listar_ranking()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function listar_usuario(req,res){

    var id = req.params.idUsuario 

    usuarioModel.listar_usuario(id)
        .then(function (resultado){
            res.status(200).json(resultado)
        }).catch(function (erro) {
            console.log(erro)
            console.log("Houve um erro ao buscar o usuario")
            res.status(500).json(erro.sqlMessage)
        })
}


function listar_pokemon_usuario(req, res){
    var id = req.params.idUsuario 

    usuarioModel.listar_pokemon_usuario(id)
        .then(function (resultado){
            res.status(200).json(resultado)
        })
        .catch(function (erro){
            console.log(erro)
            console.log("Houve um erro ao buscar o pokemon")
            res.status(500).json(erro.sqlMessage)
        })
}

function count_pokemon(req, res){
    var id = req.params.idUsuario

    usuarioModel.count_pokemon(id)
        .then(function (resultado){
            res.status(200).json(resultado)
        })
        .catch(function (erro){
            console.log(erro)
            console.log("Houve um erro ao buscar o pokemon")
            res.status(500).json(erro.sqlMessage)
        })
}

function update_pontos(req, res){
    var pontos = req.body.pontosServer
    var idUsuario = req.body.usuarioServer

    usuarioModel.update_pontos(pontos, idUsuario)
        .then(function (resultado){
            res.json(resultado);
        })
        .catch(function (erro){
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
}

function somar_pontos(req, res){
    var usuario = req.body.usuarioServer
    var pontos = req.body.pontosServer

    usuarioModel.somar_pontos(pontos, usuario)
        .then(function (resultado){
            res.json(resultado);
        })
        .catch(function (erro){
            console.log(erro);
            console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        })
}


module.exports = {
    entrar,
    cadastrar,
    listar,
    listar_ranking,
    listar_usuario, 
    listar_pokemon_usuario, 
    count_pokemon,
    update_pontos,
    somar_pontos,
    testar
}