let num = parseInt(prompt("Digite um número para descobrir se ele é primo ou não"))
let resul = 0
conta = num
while(resul >= 1){
    conta--
    resul = num % conta
}
console.log(num)
console.log(conta)
console.log(resul)
if (resul == 0 ){
    alert(`O número ${num} não é primo`)
} else {
    alert(`O número ${num} é primo`)
}