
function validar_primeira(){
    var email = document.getElementById('in_email').value
    var senha = document.getElementById('in_senha').value
    
    var validaco =  email == "" || senha == "" 
    
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
