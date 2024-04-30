let pares = []
for(let i = 2; i <= 20; i++){
    if (i % 2 == 0) {
        pares.push(i)  
    }
}
console.log(pares);

pares[2] = 12

let frutas = ['banana', 'maçã', 'uva']
frutas.push('Morango')
frutas.splice(1,1)

let amigos = ['Alice', 'Bob', 'Charlie']
let novosAmigos = ['Dave', 'Eva', 'Frank']
let maisAmigos = amigos.concat(novosAmigos)

let idadeAmigos = [25, 30, 28, 22, 26, 24]
let soma = 0
for(let i = 0;i < idadeAmigos.length;i++){
    soma += idadeAmigos[i]
}
console.log(soma);

let media = soma / idadeAmigos.length
console.log(media);

let impares = []
for(i = 0;i <= 9; i++){
    if(i % 2 != 0){
        impares.push(i)
    }
}
console.log(impares);

