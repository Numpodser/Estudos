function soma(n1,n2){
    let soma = n1 + n2
    alert(`A soma de ${n1} + ${n2} = ${soma}`)
}
function subtracao(n1,n2){
    let sub = n1 - n2
    alert(`A sub de ${n1} - ${n2} = ${sub}`)
}
function multi(n1,n2){
    let multi = n1 * n2
    alert(`A mult de ${n1} * ${n2} = ${multi}`)
}
function div(n1,n2){
    let div = n1 / n2
    alert(`A div de ${n1} / ${n2} = ${div}`)
}
let num1 = Number(prompt('Digite um número'))
let num2 = Number(prompt('Digite outro número'))
let op = prompt('Escolha uma das operações\n1) Soma\n2) Sub\n3) Mult\n4) Div')
switch(op){
    case '1':
        soma(num1, num2)
        break
    case '2':
        subtracao(num1, num2)
        break
    case '3':
        multi(num1, num2)
        break
    case '4':
        div(num1, num2)
        break
    default:
        alert('Opção inválida')
        break
}