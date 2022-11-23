const primeira_tela = document.querySelector(".div_primeira")
const segunda_tela = document.querySelector(".div_segunda")
// const terceira_tela = document.querySelector(".div_terceira")

const pokebola1 = document.getElementById('pokebola1')
const pokebola2 = document.getElementById('pokebola2')
const pokebola3 = document.getElementById('pokebola3')


function cadastrar_usuario(){
    var nomeServer = document.getElementById("in_nome").value
    var emailServer = document.getElementById("in_email").value
    var senhaServer = document.getElementById("in_senha").value
    var paisServer = document.getElementById("sel_pais").value
    
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeServer,
            emailServer,
            senhaServer,
            paisServer
        })
    })
    .then(function (resposta){
        console.log("Resposta: ", resposta)

        if(resposta.ok){
            console.log("Deu tudo certo")
            alerta_juncao(2)

            setTimeout(()=>{
                window.location = "login.html";
            }, 3000)
        }
        else{
            console.log("Deu tudo errado")
            alerta_juncao(3)
        }
    })
    .catch(function (erro){
        console.log(`#ERRO: ${erro}`)
    })
}



function ir_segunda(){
    primeira_tela.style.display = 'none'
    segunda_tela.style.display = 'flex'

    pokebola2.classList.add('proxima_pokebola')
    pokebola2.classList.toggle('pokebola_selecionada')

    pokebola1.classList.toggle('pokebola_selecionada')

}


function validar_primeira(){
    var nome = document.getElementById('in_nome').value
    var email = document.getElementById('in_email').value
    var senha = document.getElementById('in_senha').value
    var pais = document.getElementById('sel_pais').value
    
    var validaco = nome == "" || email == "" || senha == "" || pais == ""
    
    if(!validaco){
        cadastrar_usuario()
        // ir_segunda()
    }
    else{
        alerta_juncao(1)
    }
}

function alerta_juncao(i){
    mostrar_alerta(i)
    contador()
    setTimeout(sumir_alerta, 3000);

}


const alerta = document.querySelector('.div_alerta')
const h2_alerta = document.querySelector("#h2_alerta")
function mostrar_alerta(i){
    var texto = [
        "PREENCHA TODOS OS CAMPOS PARA PROSSEGUIR!", 
        "VOCÊ JÁ FOI CADASTRADO NO NOSSO BANCO!", 
        "CADASTRADO REALIZADO COM SUCESSO!", 
        "ERRO AO TENTAR CADASTRAR!!!"
    ]

    alerta.classList.remove('sumir_alerta') 
    alerta.style.display = 'block'
    h2_alerta.innerHTML = texto[i]
}

function sumir_alerta(){
    alerta.classList.add('sumir_alerta')
    
    setTimeout(function(){
        alerta.style.display = 'none'
    }, 980)
    
}

const tempo = document.getElementById('div_tempo')
function contador(){

    for(var i = 0; i < 100; i+= 3){
        (function (i) {
            setTimeout(() => {
                tempo.style.width = `${i}%`
            }, 30 * i);
        })(i)
    }
}



function ir_primeira(){
    primeira_tela.style.display = 'flex'
    segunda_tela.style.display = 'none'
    
    pokebola1.classList.toggle('pokebola_selecionada')
    pokebola2.classList.toggle('pokebola_selecionada')

    
}


