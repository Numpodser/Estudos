let cont = 0
let nota = 0
let soma = 1
let media = 0
while(nota >= 0){
    nota = Number(prompt("Digite as notas para calcular a média, quando terminar digite (-1) para encerrar o programa "))
    soma += nota
    media = soma / cont
    cont ++
}
alert(`A média é de ${media.toFixed(1)}`)