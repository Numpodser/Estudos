let idade = document.querySelector('#idade')
let nome = document.querySelector('#nome')
let botao = document.querySelector('#botao')
let paragrafo = document.querySelector('#textoresul')

botao.onclick = () => {
    if(idade.value < 18){
        paragrafo.textContent = 'Nada de carro para você agora'
    } else {
        paragrafo.textContent = `Parabéns ${nome.value}, sua carteira de motorista está pronta!`
    }
}