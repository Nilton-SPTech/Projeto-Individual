var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function listar_ranking(){
    var instrucao = `SELECT TOP 3 * FROM usuario 
	                ORDER BY pontos DESC`; 

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
}

function listar_usuario(id_usuario){
    var instrucao = `SELECT * FROM usuario 
                    WHERE idUsuario = ${id_usuario}`

    console.log("Executando a instrução SQL: \n"+instrucao)
    return database.executar(instrucao)
}

function listar_pokemon_usuario(id_usuario){
    var instrucao = `
    SELECT 	p.nome 'pokemon', 
            imgP.enderecoImagemFrente 'frente', 
            imgP.enderecoImagemCosta 'costa', 
            imgP.enderecoGif 'gif'
            FROM usuario u
                INNER JOIN pokemonUsuario pu ON u.idUsuario = pu.fkUsuario
                 INNER JOIN pokemon p ON p.idPokemon = pu.fkPokemon
                  INNER JOIN imagemPokemon imgP ON p.idPokemon = imgP.fkPokemon
                WHERE idUsuario = ${id_usuario}
    `

    console.log("Executando a instrução SQL: \n"+instrucao)
    return database.executar(instrucao)
}

function count_pokemon(id_usuario){
    var instrucao = `
    SELECT COUNT(p.fkUsuario) 'pokedex' FROM usuario u 
    INNER JOIN pokemonUsuario p ON u.idUsuario = p.fkUsuario
    WHERE u.idUsuario = ${id_usuario}
    GROUP BY u.idUsuario
     `

    console.log("Executando a instrução SQL: \n"+instrucao)
    return database.executar(instrucao)
}

module.exports = {
    entrar,
    cadastrar,
    listar,
    listar_ranking, 
    listar_usuario,
    count_pokemon,
    listar_pokemon_usuario
};