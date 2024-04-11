let nome = prompt("Qual o nome do seu país?")
let notaRenda = Number(prompt("Qual é a nota de renda(1 a 10)"))
let notaEducacao = Number(prompt("Qual é a nota de educação(1 a 10)"))
let notaSaude = Number(prompt("Qual é a nota de saúde(1 a 10)"))
let mediaNotas = (notaEducacao + notaRenda + notaSaude) / 3
let idh = mediaNotas * 0.1
idh = idh.toFixed(3)
let nivel
switch(true){
    case idh >= 0 && idh <= 0,555:
        nivel = "baixo"
        break
    case idh >= 0.556 && idh <= 0.699:
        nivel = "médio"
        break
    case idh >= 0.700 && idh <= 0.799:
        nivel = "alto"
        break
    case idh >= 0.800 && idh <= 1:
        nivel = "muito alto"
        break
    default:
        nivel = "inválido"
}
if(nivel == "inválido"){
    alert("Notas inválidas")
} else {
    alert(`O IDH do país ${nome} é ${idh} e está no nível ${nivel}`)
}