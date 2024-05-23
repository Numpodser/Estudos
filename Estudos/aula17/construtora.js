function CalculoDeTerreno(larg, profund) {
    let conta = larg * profund
    if (conta <= 1200){
        alert(`Um terreno com ${larg} de largura e ${profund} de profundidade tem uma area de ${conta}m², é um sobrado.`)
    } else if (conta <= 2000 ) {
        alert(`Um terreno com ${larg} de largura e ${profund} de profundidade tem uma area de ${conta}m², é um terreno padrão.`)
    } else if (conta <= 4000){
        alert(`Um terreno com ${larg} de largura e ${profund} de profundidade tem uma area de ${conta}m², é um terreno comercial.`)
    } else {
        alert(`Um terreno com ${larg} de largura e ${profund} de profundidade tem uma area de ${conta}m², é uma Mansão.`)
    }
}

CalculoDeTerreno(50, 40)
CalculoDeTerreno(30, 40)
CalculoDeTerreno(100, 100)
CalculoDeTerreno(40, 40)