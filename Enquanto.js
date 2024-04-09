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