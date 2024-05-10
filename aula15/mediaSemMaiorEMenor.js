let notas = []
for (let i = 0; i < 6; i++) {
    let perg = Number(prompt('Digite uma nota:'))
    if (perg >= 0 && perg <= 10) {
        notas.push(perg)
    } else {
        i--
    }
}
let menor = 11
let maior = -1
let soma = 0 
for (let i = 0; i < 6; i++) {
    if (notas[i] < menor) {
        menor = notas[i]
    } if (notas[i] > maior){
        maior = notas[i]
    }
    soma += notas[i]
}
soma = soma - (maior + menor)
console.log(notas);
console.log(maior);
console.log(menor);
let media = soma / 4
console.log(media);