let frete = 12.50
let desconto = 0
let total 
let valorCompra = Number(prompt("Qual o valor da sua compra?"))
let escolha = Number(prompt("Qual seu nível de assinatura?\n1) Assinante Premium\n2) Assinate Gold\n3) Assinante Silver\n4) Não assinante"))
switch(escolha){
    case 1:
        desconto = valorCompra * 0.20
        total = valorCompra - desconto
        alert(`O total da sua compra é R$ ${total}`)
        break
    case 2:
        desconto = valorCompra * 0.20
        total = (valorCompra - desconto) + frete
        alert(`O total da sua compra é R$ ${total}`)
        break
    case 3:
        desconto = valorCompra * 0.10
        total = (valorCompra - desconto) + frete
        alert(`O total da sua compra é R$ ${total}`)
        break
    case 4:
        total = valorCompra + frete
        alert(`O total da sua compra é R$ ${total}`)
        break
    default:
        alert("Opção invalida")
}