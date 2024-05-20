let mes = parseInt(prompt('DIgite o mês do ano para saber a estação:'))
switch(mes){
    case 1:
    case 2:
    case 12:
        alert('Verão')
        break
    case 3:
    case 4:
    case 5:
        alert('Outono')
        break
    case 6:
    case 7:
    case 8:
        alert('Inverno')
        break
    case 9:
    case 10:
    case 11:
        alert('Primavera')
        break
}