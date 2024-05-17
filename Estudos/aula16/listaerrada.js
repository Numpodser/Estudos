let erro = []
let correta = []
for(let i = 0; i < 15; i++){
    erro.push(Math.round(Math.random() * 15))
}
alert(erro)
for(let i = 0; i < erro.length; i++){
    if(erro[i] < 5){
        correta.push(erro[i])
    }
}
alert(correta)
