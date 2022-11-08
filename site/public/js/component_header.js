


window.onload = function() {
    var header = document.querySelector('header') 

    header.innerHTML = `
    <div class="div_container">
        <div class="div_logo" onclick="window.location ='./index.html'">
            <img src="https://cdn.ome.lt/kjnDZySYUJ7cxwLtDxzbPBj8PQU=/770x0/smart/uploads/conteudo/fotos/pokeball.png">
            <h2>Pokemon champion’s</h2>
        </div>
        <nav>
            <button onclick="abrir_modal_nav()" id="sel_tema">Mudar Tema</button>
            <ul>
                <li>Ranking</li>
                <li>Pokemons</li>
                <li>Entrar</li>
                <li onclick="window.location ='./cadastro.html'">Cadastrar</li>
            </ul>
        </nav>
    </div>
    `

    component_modal()


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


}


function component_modal(){
    var modal = document.getElementById('div_component_modal') 

    modal.innerHTML = `<div class="div_fundo_modal">
    <div class="div_modal_tema" >
        <div class="div_titulo_modal">
            <h2>Escolha seu tema</h2>
        </div>
        
        <div class="div_escolha_tema">
            <div class="cor_mostrar" id="div_mostrar_tema">
                <img height="250px" style="margin: auto;" id="img_pokemon">
            </div>

            <div class="div_esolha">
                <div class="div_escolha_background">
                    <h3 class="h3_modal">Background</h3>
                    <div class="div_formulario_background">
                        <form action="" class="form_background">
                            <input onclick="mudar_background('eletrico')"class="radio_eletrico" name="escolha_background" type="radio" id="radio_eletrico_background">
                            <div class="linha"></div>
                            <input onclick="mudar_background('fogo')"class="radio_fogo" name="escolha_background" type="radio" id="radio_fogo_background">
                            <div class="linha"></div>
                            <input onclick="mudar_background('grama')"class="radio_grama" name="escolha_background" type="radio" id="radio_grama_background">
                            <div class="linha"></div>
                            <input onclick="mudar_background('agua')"class="radio_agua" name="escolha_background" type="radio" id="radio_agua_background">
                        </form>
                    </div>
                </div>
                <div>
                    <div class="div_escolha_pokemon_geral">
                        <h3 class="h3_modal">Pokemon</h3>
                        <form action="" class="div_escolha_pokemon">
                            <div class="div_escolha_pokemon_solo">
                                <img class="img_pikachu"src="assets/imgs/pikachu_icon_editado.png">
                                <input onclick="mudar_pokemon('pikachu')"class="radio_pokemon radio_pikachu radio_eletrico"type="radio" name="escolha_pokemon" id="radio_pikachu">
                            </div>
                            <div class="div_escolha_pokemon_solo">
                                <img class="img_pokemon"src="assets/imgs/fogo.png">
                                <input onclick="mudar_pokemon('charmander')"class="radio_pokemon radio_fogo"type="radio" name="escolha_pokemon" id="radio_fogo">
                            </div>
                            <div class="div_escolha_pokemon_solo">
                                <img class="img_pokemon"src="assets/imgs/grama.png">
                                <input onclick="mudar_pokemon('bulbassaur')"class="radio_pokemon radio_grama"type="radio" name="escolha_pokemon" id="radio_grama">
                            </div>
                            <div class="div_escolha_pokemon_solo">
                                <img class="img_pokemon"src="assets/imgs/agua.png">
                                <input onclick="mudar_pokemon('squirtle')"class="radio_pokemon radio_agua"type="radio" name="escolha_pokemon" id="radio_agua">
                            </div>
                        </form>
                    </div>
                </div>
                <button onclick="mudar_tema()">Salvar tema</button>
            </div>
        </div>
        </div>
    </div>`
}
