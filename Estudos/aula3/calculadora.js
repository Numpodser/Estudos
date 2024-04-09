let n1 = Number(prompt("Digite um número"))
let n2 = Number(prompt("Digite outro número"))
let escolha = prompt("Escolha uma das opçõesn\n(1)Adição\n(2)Subtração\n(3)Divisão\n(4)Multiplicação")
switch(true){
    case escolha == "1" || escolha =="Adição":
        alert(`${n1} + ${n2} = ${n1+n2}`)
        break
    case escolha == "2" || escolha == "Subtração":
        alert(`${n1} - ${n2} = ${n1-n2}`)
        break
    case escolha == "3" || escolha == "Divisão":
        alert(`${n1} / ${n2} = ${n1/n2}`)
        break
    case escolha == "4" || escolha == "Multiplicação":
        alert(`${n1} * ${n2} = ${n1*n2}`)
        break
    default:
        alert("Operação invalida")
}