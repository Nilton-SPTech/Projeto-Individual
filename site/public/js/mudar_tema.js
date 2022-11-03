

function mudar_background(fundo){
    
    var tema = document.getElementById('div_mostrar_tema')
    tema.className = ''

    var class_bg = `${fundo}_fundo`
    tema.className = class_bg

    sessionStorage.BACKGROUND = class_bg
}

function mudar_pokemon(pokemon){
    var img_pokemon = document.getElementById('img_pokemon')

    var url = `assets/gif/${pokemon}-animacao.gif`
    img_pokemon.src = url 
    sessionStorage.POKEMON = pokemon
}


function mudar_tema(){
    var eletrico = document.getElementById('div_eletrico')
    var fogo = document.getElementById('div_fogo')
    var grama = document.getElementById('div_grama')
    var agua = document.getElementById('div_agua')
    
    var body = document.getElementById('body')

    var pokemon = sessionStorage.POKEMON
    var background = sessionStorage.BACKGROUND

    if(pokemon == "pikachu"){
        eletrico.style.display = "flex"
        fogo.style.display = "none"
        grama.style.display = "none"
        agua.style.display = "none"
    }

    if(pokemon == 'charmander'){
        eletrico.style.display = "none"
        fogo.style.display = "flex"
        grama.style.display = "none"
        agua.style.display = "none"
    }

    if(pokemon == 'bulbassaur'){
        eletrico.style.display = "none"
        fogo.style.display = "none"
        grama.style.display = "flex"
        agua.style.display = "none"
    }

    if(pokemon == 'squirtle'){
        eletrico.style.display = "none"
        fogo.style.display = "none"
        grama.style.display = "none"
        agua.style.display = "flex"
    }

    body.className = ''
    body.className = background
}

var modal 

function abrir_modal_nav(){
    modal = document.querySelector('.div_fundo_modal')
    modal.classList.toggle('aparecer_modal')
    
    
    var div_escolha = document.querySelector('.div_modal_tema')
    div_escolha.classList.toggle('div_modal_tema_ativo')

    console.log(div_escolha)
}
function fechar_modal(){
    modal = document.querySelector('.div_fundo_modal')
    console.log(modal)

    modal.classList.remove('aparecer_modal')
}