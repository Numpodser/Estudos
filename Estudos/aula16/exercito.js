let ano = []
let resp = []
for(let i = 2010; i < 2020; i++){
    ano.push(i)
}

alert('Digite "S" ou "N" para responder se houve ou não alistmento no ano')
for(let cont = 0; cont < ano.length; cont++){
    let perg = prompt(`Ano de ${ano[cont]}:`)
    resp.push(perg)
}
let veri = false
let c = resp.length
for(c; c != 0; c--){
    if(resp[c] == 's'){
        veri = true
        break
    }
}
if( veri == true){
    alert(`O ultimo ano de alistamento foi ${ano[c]}`)
} else {
    alert('Não houve alistamento nos ultimos 10 anos')
}
