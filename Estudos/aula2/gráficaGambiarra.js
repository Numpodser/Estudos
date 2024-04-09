let milheiros = 169.90
let quantMilheiro = parseFloat(prompt("Quantos milheiros você trabalhou?"))
let totalPagar = milheiros * quantMilheiro
let imposto = (totalPagar * 9) / 100
let liquido = totalPagar - imposto
alert(`Milheiro(s): ${quantMilheiro}\nTotal a pagar R$: ${totalPagar.toFixed(2)}\nImposto R$: ${imposto.toFixed(2)}\nTotal Líquido R$: ${liquido.toFixed(2)}`)