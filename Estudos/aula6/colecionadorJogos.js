let totalDinheiro = 2000
let quantJogos = 0
let total = 0
let caro = 0
let barato = 2001
let nomeCaro
let nomeBarato
while (totalDinheiro > 0) {
    let nomeJogo = prompt("Qual o nome do jogo?")
    let valor = Number(prompt("Qual o valor do jogo?"))
    totalDinheiro -= valor
    if (totalDinheiro >= 0) {
        quantJogos++
        total += valor
        if (valor > caro){
            caro = valor
            nomeCaro = nomeJogo
        }
        if(valor > barato){
            barato = valor
            nomeBarato = nomeJogo
        }
    } else {
        alert(`O jogo ${nomeJogo} ultrapassou o orçamento e não foi incluido a sua compra`)
    }
}
alert(`O total gasto foi de R$ ${total} e foram comprados ${quantJogos} jogos\nO jogo mais barato é ${nomeBarato} de R$ ${barato}\nO jogo mais caro é ${nomeCaro} de R$ ${caro}`)