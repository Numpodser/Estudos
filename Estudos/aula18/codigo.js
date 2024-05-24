// const somar = function (num1, num2){
//     return num1 + num2
// }

// const somar = (num1, num2) =>{
//     return num1 + num2
// }

// let resultado = somar(54,78)

// alert(`O resultado é ${resultado}`)

// function processoAposReceberNome(meDeUmaFuncao) {
//     let nome = prompt('Qual é o seu nome?')
//     meDeUmaFuncao(nome)
// }

// processoAposReceberNome(function (nomeRecebido) {
//     alert(`Feliz Aniversário ${nomeRecebido}`)
// })

let lista = [1, 2, 3, 4, 5, 6, 7, 8]

let listaPares = lista.filter( item => {
    console.log(`Estou verificando o ${item}`);
    return item % 2 == 0
})

console.log(listaPares);