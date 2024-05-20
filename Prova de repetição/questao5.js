let fila = []
let opção = ''
for(let i = 0; i < 5; i++){
    opção = prompt('Escolha uma das opções\nA) Entrar na fila\nB) Uma pessoa saiu da fila')
    opção = opção.toUpperCase()
    switch(opção){
        case 'A':
            let nome = prompt('Digite seu nome:')
            fila.push(nome)
            alert(fila)
            break
        case 'B':
            fila.shift()
            i -= 2
            alert(fila)
            break
        default:
            alert('Opção invalida')
            break
    }
}
alert(`A fila está cheia: ${fila}`)