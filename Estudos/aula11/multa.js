let quant = Number(prompt('Digite a quantidade de multas que você dejesa somar'))
let somaMultas = 0, somaPontos = 0
for(let cont = 0;cont < quant; cont++){
    let multas = Number(prompt('Digite o valor em reais da multa'))
    let pontos = Number(prompt('Digite o valor dos pontos'))
    somaMultas += multas
    somaPontos += pontos
}
if(somaPontos >= 21){
    alert(`A soma de pontos é ${somaPontos}, você está irregular`)
} else {
    alert(`A soma de pontos é ${somaPontos}, você está regular`)
}
if(somaMultas >= 5000){
    alert(`Você gastou R$ ${somaMultas} e poderia ter comprado um gol 1980 (R$ 5.000) com o valor das multas`)
} 