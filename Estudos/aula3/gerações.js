let nasc = parent(prompt("Digite o ano de nascimento"))
switch(true){
    case nasc <= 1945:
        alert("Sem geração")
        break
    case nasc <= 1964:
        alert("Baby Boomers")
        break
    case nasc <= 1980:
        alert("Geração X")
        break
    case nasc <= 1996:
        alert("Geração Y ou Millennials")
        break
    case nasc <= 2010:
        alert("Geração Z")
        break
    case nasc >= 2011:
        alert("Geração Alfa")
        break
    default:
        ("Opção invalida")
}