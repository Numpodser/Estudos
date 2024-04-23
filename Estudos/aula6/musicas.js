let nomeMusic = ''
let temp = 0
let minMusic = 0
let tempFinal = 0
let horas = 0
let minutos
while (nomeMusic != 'encerrar') {
    nomeMusic = prompt('Qual o nome da música?')
    if (nomeMusic != 'encerrar') {
        minMusic = prompt('Quantos minutos tem a música')
        temp += minMusic
    }
}
while(temp >= 60){
    temp -= 60
    horas ++
}
minutos = temp
alert(`${horas}:${minutos}`)