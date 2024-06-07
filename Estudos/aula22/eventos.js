function clicar() {
    console.log('voce clicou no botao')
}

function passarMouse() {
    alert('voce passou o mouse')
}

function botaoDireito() {
    alert('voce clicou com o botao direito do mouse')
}

function ativarInput() {
    console.log('Input ativado')
}

function ativarChange(apelidoEvento){
    console.log(apelidoEvento)
    // console.log(apelidoEvento.target.value)
    console.log('Change ativado')
}

function enviarForm(eventoRecebido) {
    eventoRecebido.preventDefault()
    console.log('formulario enviado')
}