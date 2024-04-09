let salario = parseFloat(prompt("Digite os seu salário:"))
let desconto = (salario * 15) / 100
let salarioDescont = salario - desconto
alert(`Salário Bruto R$: ${salario}\nDesconto R$: ${desconto}\nSalário Líquido R$: ${salarioDescont}`)