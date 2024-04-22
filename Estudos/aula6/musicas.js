let nomeMusic = ''
let temp = 0
let minMusic = 0
while (nomeMusic != 'terminar') {
    nomeMusic = prompt('Qual o nome da música?')
    if (nomeMusic != 'terminar') {
        minMusic = prompt('Quantos minutos tem a música')
        temp += minMusic
    }
}
alert(`O tempo total de reprodução é de ${temp.toFixed(2)} horas`)