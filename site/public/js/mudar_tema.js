
var tema 
function mudar_tema(){
    tema = document.getElementById('sel_tema').value
    sessionStorage.TEMA = tema
    console.log(sessionStorage.TEMA)
}