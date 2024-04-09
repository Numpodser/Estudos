let nasc = parent(prompt("Digite o ano de nascimento"))
switch(true){
    case nasc < 1945:
        alert("Sem geração")
        break
    case nasc >= 1945 && nasc < 1965:
        alert("Baby Boomers")
        break
    case nasc >=1965 && nasc < 1981:
        alert("Geração X")
        break
    case nasc >= 1981 && nasc < 1997:
        alert("Geração Y ou Millennials")
        break
    case nasc >= 1997 && nasc < 2011:
        alert("Geração Z")
        break
    case nasc > 2010:
        alert("Geração Alfa")
        break
    default:
        ("Opção invalida")
}