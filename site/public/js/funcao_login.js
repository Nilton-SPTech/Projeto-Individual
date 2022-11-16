
function validar_primeira(){
    var email = document.getElementById('in_email').value
    var senha = document.getElementById('in_senha').value
    
    var validaco =  email == "" || senha == "" 
    
    if(!validaco){
        entrar()
    }
    else{
        mensagem_alerta()
    }
    
}


function mensagem_alerta(){
    mostrar_alerta()
    contador()
    setTimeout(sumir_alerta, 3000);
}

const alerta = document.querySelector('.div_alerta')
function mostrar_alerta(){
    alerta.classList.remove('sumir_alerta') 
    alerta.style.display = 'block'
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




function entrar() {
 
    var emailVar = document.getElementById('in_email').value;
    var senhaVar = document.getElementById('in_senha').value;

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")
        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
        
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id;

                senhaVar.value = ''
                emailVar.value = ''
                window.location = './usuario/index.html'
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