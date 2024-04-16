let resultado = document.getElementById("divResultado")
console.log(resultado);
// resultado.innerHTML = "Olá"
let cont = 0
while(cont < 10){
    // console.log(cont);
    resultado.innerHTML += cont + " patinho foi passear... <br>"
    cont++
}

let resp = document.getElementById("divResp")
console.log(resp)
let contad = 1
let quadrado = 0
while(contad <= 10){
    quadrado = contad**2
    resp.innerHTML += quadrado + "\n"
    contad++
}

let decre = document.getElementById("divDecre")
let decrecer = 10
while(decrecer > 0){
    decre.innerHTML += decrecer + "\n"
    decrecer--
}

let soma100 = document.getElementById("divSoma100")
let soma = 0
cont = 0
while(cont <= 100){
    soma100.innerHTML = "resultado da soma " + (soma += cont)
    cont++
}

let tabuada = document.getElementById("divTabuada")
let tabua = 5
let conta = 1
let result = 0
while(conta <= 10){
    tabuada.innerHTML += `${tabua} X ${conta} = ${tabua * conta} <br>`
    conta++
}

// let tabuada2 = document.getElementById("divTabuada")
// let tabua2 = Number(prompt("Digite um número para ver a tabuada"))
// let con = 1
// let resulta = 0
// while(con <= 10){
//     tabuada2.innerHTML += `${tabua2} X ${con} = ${tabua2 * con} <br>`
//     con++
// }

let imp = document.getElementById("divImpar")
let impar = 0
let contador = 1
while(contador <= 20){
    impar = contador % 2
    if(impar == 1){
        imp.innerHTML += contador + "\n"
    }
contador++
}

let fat = document.getElementById("divFatorial")
let fatorial = 1
// let contado = Number(prompt("Digite um número para saber o fatorial"))
while(contado > 1 ){
    fatorial *= contado
    contado--
}
fat.innerHTML = fatorial

let fizz = document.getElementById("divFizzBuzz")
let contador1 = 1
let resul = 0
while(contador1 <= 100){
    resul = contador1 % 3
    if (resul == 0){
        fizz.innerHTML +=  
    }
    contador1++
}