var table = document.querySelector('table')


function listar(){
    fetch("/usuarios/listar_ranking", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {

            });
        } else {
            console.log("Houve um erro ao tentar realizar o login!");
            resposta.text().then(texto => {
                console.error(texto);
                var erro = texto

                if(erro){
                    console.log("Usuário não existe")
                }

            });
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}