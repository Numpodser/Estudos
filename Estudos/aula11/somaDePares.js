let soma = 0
let impar = false
for(cont = 0; cont < 5; cont++){
    let num = Number(prompt('Digite um número'))
    if(num % 2 == 0){
        soma += num
    } else {
        impar = true
    }
    
}
if(impar == false){
    let media = soma / 5
    alert(`A média dos 5 numeros é ${media}`)
} else {
    alert('Um dos números é impar')
}