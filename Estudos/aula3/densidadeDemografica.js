let populacao = parseInt(prompt("Qual o total de habitantes na região?"))
let area = parseFloat(prompt("Quantos metros² a região tem?"))
let densidadeDemo = populacao / area
if(densidadeDemo > 100){
    alert(`Densidade alta, ${densidadeDemo.toFixed(2)}`)
} else if (densidadeDemo < 25){
    alert(`Densidade baixa, ${densidadeDemo.toFixed(2)}`)
} else {
    alert(`Densidade média, ${densidadeDemo.toFixed(2)}`)
}