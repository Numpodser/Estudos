let num = []
for(let i = 0; i < 5; i++){
    let perg = parseInt(prompt('Digite um número'))
    num.push(perg)
}
console.log(num);
let imp = []
for(i = 0; i < num.length; i++){
     let veri = num[i] % 2
    if(veri != 0){
        imp.push(num[i])
    }
}
let soma = 0
for(i = 0; i < imp.length; i++){
    soma += imp[i]
}
alert(`Os impares são ${imp}`)
alert(`A soma dos ímpares é ${soma}`)