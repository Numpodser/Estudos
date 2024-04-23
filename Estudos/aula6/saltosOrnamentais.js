let nota = 0
let notaMaior = 0
let notaMenor = 11
let cont = 0
let soma = 0
while (cont < 5) {
    nota = parseFloat(prompt('Digite a nota'))
    if (nota > notaMaior) {
        notaMaior = nota
    } else if (nota < notaMenor) {
        notaMenor = nota
    } else {
        soma += nota
    }
    cont++
}
console.log(notaMenor)
console.log(notaMaior)
alert(`A nota final do atleta é ${nota}`)