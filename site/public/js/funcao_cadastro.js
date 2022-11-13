const primeira_tela = document.querySelector(".div_primeira")
const segunda_tela = document.querySelector(".div_segunda")
// const terceira_tela = document.querySelector(".div_terceira")

const pokebola1 = document.getElementById('pokebola1')
const pokebola2 = document.getElementById('pokebola2')
const pokebola3 = document.getElementById('pokebola3')



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
        ir_segunda()
    }
    else{
        mostrar_alerta()
        contador()
        setTimeout(sumir_alerta, 3000);
    }
    
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






function ir_primeira(){
    primeira_tela.style.display = 'flex'
    segunda_tela.style.display = 'none'
    
    pokebola1.classList.toggle('pokebola_selecionada')
    pokebola2.classList.toggle('pokebola_selecionada')

    
}