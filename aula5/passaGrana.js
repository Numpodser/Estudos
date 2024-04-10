let saldo = 500
let escolha = 0
let contaBanc = Number(prompt("Digite o número da sua conta bancária"))
while(escolha < 4 ){
    escolha = Number(prompt("Qual o tipo de operação\n1) Saldo\n2) Depósito\n3) Saque\n4) Sair"))
    switch(escolha){
        case 3:
            let saque = Number(prompt("Qual o valor a ser sacado?"))
            if(saque <= saldo){
                saldo -= saque
            } else {
                alert("Saldo insuficiente.")
            }
            alert(`Seu saldo atual é de R$ ${saldo}`)
            break
        case 2:
            let deposito = Number(prompt("Qual o valor a ser depositado?"))
            saldo += deposito
            alert(`Seu saldo atual é de R$ ${saldo}`)
            break
        case 1:
            alert(`Seu saldo é de R$ ${saldo}`)
            break
        case 4:
            alert("Encerrando operação")
            break
        default:
            alert("Opção Inválida")
    }
}