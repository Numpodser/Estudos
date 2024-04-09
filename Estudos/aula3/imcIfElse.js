let altura = parseFloat(prompt("Digite a sua altura:"))
let peso = parseFloat(prompt("Digite seu peso:"))
let imc = peso/(altura**2)
if(imc < 18){
    alert(`Abaixo do peso, seu IMC é ${imc.toFixed(2)}`)
} else if(imc > 25){
    alert(`Acima do peso, seu IMC é ${imc.toFixed(2)}`)
} else {
    alert(`Peso ideal, seu IMC é ${imc.toFixed(2)}`)
}