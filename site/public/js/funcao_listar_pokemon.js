var id = sessionStorage.ID_USUARIO 

listar_pokemon_usuario(id)

function listar_pokemon_usuario(id_usuario){

    fetch(`/usuarios/listar_pokemon_usuario/${id_usuario}`, {
        cache: 'no-store', method: "GET"
    })
    .then(function (response){
        if(response.ok){
            response.json().then(function (resposta){

                if(resposta.length < 1){
                    console.log("Você não contém pokemon")
                }
                else{
                    console.log(`Dados recebidos: ${JSON.stringify(resposta)}`)
                }
            })
        }
        else{
            console.log("Nenhum dado encontrado ou erro na API")
        }
    })
    .catch(function (error){
        console.log(`Erro na obtenção dos dados do select: ${error.message}`)
    })
}