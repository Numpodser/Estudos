let num = 1
let cont = 0
let soma = 0
let media = 0
while(num > 0){
    num =Number(prompt("Digite um número positivo e caso queira parar digite 0 ou menos"))
    if(num > 0){
        soma += num
        cont++
    }
}
media = soma / cont
alert(`A média é ${media.toFixed(2)}`)