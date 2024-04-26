let num = 0
let soma = 0
for (let cont = 0; cont < 5; cont++) {
    num = Number(prompt("Digite um número"))
    if(num > 7){
        soma+=num
    }
}
alert(`A soma dos números maiores que 7 é ${soma}`)