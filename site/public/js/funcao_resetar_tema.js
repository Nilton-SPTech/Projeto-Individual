
window.onload = function carregar_tema() {
    console.log(sessionStorage.BACKGROUND)

    mudar_tema();
    
    
    modal = document.querySelector('.div_fundo_modal')
    modal.classList.remove('aparecer_modal')

    var eletrico = document.getElementById('div_eletrico')
    var fogo = document.getElementById('div_fogo')
    var grama = document.getElementById('div_grama')
    var agua = document.getElementById('div_agua')
    var body = document.getElementById('body')
    
    
    if(sessionStorage.BACKGROUND == ""){
        body.className = 'eletrico_fundo'
    }
    if(sessionStorage.POKEMON == ""){
        eletrico.style.display = "flex"
        fogo.style.display = "none"
        grama.style.display = "none"
        agua.style.display = "none"
    }

    var tema = document.getElementById('div_mostrar_tema')
    tema.className = sessionStorage.BACKGROUND

    var img_pokemon = document.getElementById('img_pokemon')
    var url = `assets/gif/${sessionStorage.POKEMON}-animacao.gif`
    img_pokemon.src = url 
  };
