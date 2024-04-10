let p1 = Number(prompt("Quantos pontos você fez?"))
let p2 = Number(prompt("Quantos pontos você fez?"))
let p3 = Number(prompt("Quantos pontos você fez?"))
let total = p1 + p2 + p3
switch(total){
    case 0:
        alert("Avaí das petecas")
        break
    case 1:
    case 2:
    case 3:
    case 4:
        alert("pseudo-petequeiro")
        break
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        alert("petequeiro de final de semana")
        break
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
        alert("petequeiro profissa")
        break
    case 15:
        alert("Deus da peteca")
        break
    default:
        alert("Pontuação invalida")
}