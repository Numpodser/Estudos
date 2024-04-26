let soma = 0
let num = Number(prompt("Digite um número para saber a soma de 1 até o número escolhido"))
for(let cont = 1; cont <= num;cont++){
    soma += cont
}
alert(`A soma dos número entre 1 e ${num} é ${soma}`)