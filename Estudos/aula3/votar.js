let idade = parseInt(prompt("Qual a sua idade?"))
if(idade < 16){
    alert("Não pode votar")
} else if (idade > 17 && idade < 70){
    alert("Obrigatório votar")
} else {
    alert("Voto opcional")
}