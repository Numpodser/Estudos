const fs = require('fs')

const conteudo = fs.readFileSync('arq.txt', 'utf-8')

fs.readFile('arquivo.txt', 'utf-8', (erro, dados) => {
    if(erro){
        console.log(erro)
    } else {
        console.log(dados)
    }
})

console.log(conteudo)