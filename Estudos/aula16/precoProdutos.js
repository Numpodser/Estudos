let nomeProd = []
let precoProd = []
let menor50 = []
let somaQuant = 0
let entre50e100 = []
for (let i = 0; i < 5; i++) {
    nomeProd.push(prompt('Digite o produto'))
    precoProd.push(Number(prompt('Digite o preço do produto')))
}
let junta = []
for (let i = 0; i < precoProd.length; i++){
    junta.push(nomeProd[i],precoProd[i])
}
console.log(junta);


// for (let i = 0; i < precoProd.length; i++) {
//     if (precoProd[i] < 50) {
//         menor50.push(precoProd[i])
//     }
//     if (precoProd[i] > 50 && precoProd[i] < 100) {
//         entre50e100.push(nomeProd[i])
//     }
// }
// console.log(menor50);
// console.log(entre50e100);
// alert(`Os itens da sua lista são: ${nomeProd.join(', ')}\nO preço de cada um deles respectivamente são: ${precoProd.join(', ')}\n`)