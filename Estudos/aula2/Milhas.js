let quilometros = prompt("Informe um valor em KM para ser trasnformado para milhas")
quilometros = parseFloat(quilometros)
let milhas = quilometros * 0.621371
alert(`O valor informado corresponde a ${milhas.toFixed(2)} milhas`)