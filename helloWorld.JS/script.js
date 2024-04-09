function saudar(){
    let nomeUsuario, sobrenome
   nomeUsuario = prompt("Qual o seu nome? ")
   sobrenome = prompt("Qual sou sobrenome? ")

  alert("Nome digitado: " + nomeUsuario + " " + sobrenome)
}

function calcularIdade(){
    let idade, idadeAnoQueVem
    idade = Number(prompt("Qual a sua idade? "))
    idadeAnoQueVem = idade + 1
    console.log(idadeAnoQueVem);

}

function calcularOuro(){
    let precoGrama, peso, valor
    precoGrama = 368,95
    peso = Number(prompt("Qual o peso em gramas: "))
    valor = precoGrama * peso
    alert ("Valor da coisa: R$ " + valor)
}
