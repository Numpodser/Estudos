let escolha = Number(prompt("Digite o mês em númeral para descobrir quantos dias ele tem:"))
switch(escolha){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        alert(`O mês escolhido (${escolha}) possui 31 dias`)
        break
    case 4:
    case 6:
    case 9:
    case 11:
        alert(`O mês escolhido (${escolha}) possui 30 dias`)
        break
    case 2:
        alert(`O mês escolhido (${escolha}) possui 28 dias`)
        break
    default:
        alert("Resposta invalidade.")
}