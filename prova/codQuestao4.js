let contador = 0 

function enviarMensagem(evento){
    evento.preventDefault()
    const mensagem = document.getElementById('mensagem').value
    const paragCont = document.getElementById('contador')
    const parag = document.getElementById('mensagens')

    contador++
    paragCont.textContent = contador  
    parag.textContent += mensagem + ' '
}