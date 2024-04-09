let pao = Number(0.20)
let leite = Number(5.50)
let quantPaes = prompt("Quantos pães você deseja levar?")
quantPaes = parseInt(quantPaes)
let quantLeite = prompt("Quantos litros de leite você deseja levar? ")
quantLeite = parseFloat(quantLeite)
let contaPaes = quantPaes * pao
console.log(contaPaes)
let contaLeite = quantLeite * leite
console.log(contaLeite)
let total = contaLeite + contaPaes
alert(`Pão ${quantPaes} unidades\nLeite ${quantLeite} litros\nTotal R$: ${total}`) 