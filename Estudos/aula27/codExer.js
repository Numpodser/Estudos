let nomes = []

function addNome(evento){
    const paragrafo = document.getElementById('paragrafo')
    const nome = document.getElementById('nome').value
    evento.preventDefault()
    nomes.push(nome)
    paragrafo.innerHTML = nomes.join('<br>')
    localStorage.setItem('nome', JSON.stringify(nomes))
}

const valorLocal = JSON.parse(localStorage.getItem('nome'))
console.log(valorLocal)
nomes = JSON
