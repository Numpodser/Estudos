let fila = []
let nome
for (let i = 0; i < 5; i++) {
    let opcoes = prompt('Selecione uma opção: A) Entrar pessoa.\nB) Sair pessoa.')
    switch(opcoes){
        case 'A':
            nome = prompt('Qual o seu nome?')
            fila.push(nome)
            break
        case 'B':
            fila.shift()
            i -= 2
            break
    }
    alert(i)
}
alert(`A fila está cheia ${fila}`)