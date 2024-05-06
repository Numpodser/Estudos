let num = []
for (let i = 0; i < 25; i++) {
    num.push(Math.round(Math.random() * 100))
}
console.log(num);
let vetor = document.getElementById('vetor')
for (i = 0; i < num.length; i++) {
    vetor.innerHTML += `${i}: ${num[i]} <br>`
}
let n1
function lerN1(){
    do{
        n1 = Number(prompt('Digite o número 1'))
    } while(n1 < 0 || n1 > 24)
}
let n2
function lerN2(){
    do{
        n2 = Number(prompt('Digite o número 2'))
    } while(n2 < 0 || n2 > 24)
}
let soma
function calcular(){
    soma = num[n1] + num[n2]
    alert(`A soma entre ${num[n1]} e ${num[n2]} é ${soma}`)
}
let resul = 0
let pesq = 0
let perquisa = document.getElementById('pesquisar')
function pesquisar(){
    pesq = Number(prompt('Digite um valor para descobrir se ele está no vetor'))
    for(i = 0; i < num.length; i++){
        if(pesq == num[i]){
            resul = `O número ${pesq} está na posição ${num[i]}`
        }
    }
    alert(resul)
    // perquisa.innerHTML = resul
}