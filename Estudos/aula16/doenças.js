let doencas = []
let virus = []
let bacterias = []
let ambos = []
let quant = Number(prompt('Quantas doenças seram cadastradas?'))
for(quant; quant > 0; quant--){
    let nomeDoenca = prompt('Digite o nome da doença')
    doencas.push(nomeDoenca)
    let perg = prompt('Essa doença é trasmitada por\n1) Vírus\n2) Bactéria\n3) Ambos')
    switch(perg){
        case '1':
            virus.push(nomeDoenca)
            break
        case '2':
            bacterias.push(nomeDoenca)
            break
        case '3':
            ambos.push(nomeDoenca)
            break
        default:
            alert('Opção invalida.')
    }
}
alert(`As doenças transmitidas por vírus são ${virus.join(', ')}\nAs doenças transmitidas por bactérias são ${bacterias.join(', ')}\nAs doenças transmitidas por ambos são ${ambos.join(', ')}\nA lista de todas as doenças é: ${doencas.join(', ')}`)