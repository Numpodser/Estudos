let numAleat = Math.round(Math.random() * 100)
let cont = 10
let tent = 101
for (numAleat; cont > 0 && tent == numAleat; cont--){
    tent = parseInt(prompt('Digite um número entre 1 e 100 para tentar acertar'))
    alert(`Você tem ${cont} tentativas`)
}
if(tent == numAleat){
    alert('Você acertou')
} else {
    alert('Você errou')
}