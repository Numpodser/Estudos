// localStorage.setItem('serie', 'tlou')
function enviarSerie(){
    const serie = document.querySelector('#s  erie').value
    localStorage.setItem('serie', serie)

}

const parag = document.querySelector('#pergunta')

const serieDoLocalStorafe = localStorage.getItem('serie')

if(serieDoLocalStorafe){
    console.log(serieDoLocalStorafe);
    parag.textContent = `Qual outra série você gosta além de ${serieDoLocalStorafe}`
}

