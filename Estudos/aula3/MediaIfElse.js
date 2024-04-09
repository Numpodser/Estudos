let n1 = parseFloat(prompt("Digite a primeira nota:"))
let n2 = parseFloat(prompt("Digite a segunda nota:"))
let n3 = parseFloat(prompt("Digite a terceira nota:"))
let media = (n1 + n2 + n3) / 3
if (media < 7){
    alert(`Reprovado, sua média é ${media.toFixed(2)}`)
} else {
    alert(`Aprovado, sua média é ${media.toFixed(2)}`)
}