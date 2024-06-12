function mudarTextoCor() {
    const body = document.querySelector('body')
    body.style.backgroundColor = 'green'
    body.style.color = 'yellow'
    body.style.fontSize = '30px'
    body.style.fontFamily = 'sans-serif'
    body.style.textAlign = 'center'
    body.style.textDecoration = 'underline'
}

function mudarQuadrados() {
    const quadrado1 = document.querySelector('#quadrado1')
    const quadrado2 = document.querySelector('#quadrado2')
    quadrado1.style.height = '200px'
    quadrado2.style.height = '400px'

    quadrado1.style.width = '200px'
    quadrado2.style.width = '400px'

    quadrado1.style.backgroundColor = 'red'
    quadrado2.style.backgroundColor = 'blue'

    quadrado1.style.margin = '10px'
    quadrado2.style.margin = '10px'

    quadrado1.style.padding = '20px'
    quadrado2.style.padding = '20px'

    quadrado1.style.border = '5px solid purple'
    quadrado2.style.border = '5px solid brown'
}

function esconderTexto() {
    const divSumir = document.querySelector('#div-sumir')

    if (divSumir.style.display == 'none') {
        divSumir.style.display = 'block'
    } else {
        divSumir.style.display = 'none'
    }
}