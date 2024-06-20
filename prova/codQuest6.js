const n1 = document.getElementById('n1').value
const n2 = document.getElementById('n2').value
const resul = document.getElementById('resultadoSoma')

function somar(evento){
    evento.preventDefault()
    const soma = parseInt(n1) + parseInt(n2)
    resul.textContent = soma
}