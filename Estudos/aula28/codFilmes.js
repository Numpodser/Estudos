let titulos = []
let autores = []
let datas = []
let generos = []
let duracoes = []
let capas = []
let sipnoses = []

function AddFilme(evento) {
    evento.preventDefault()

    const title = document.getElementById('titulo').value
    const autor = document.getElementById('autor').value
    const data = document.getElementById('data').value
    const gen = document.getElementById('genero').value
    const duracao = document.getElementById('duracao').value
    const capa = document.getElementById('capa')
    const sip = document.getElementById('sipnose').value

    const tituloFil = document.getElementById('tituloFilme')
    const autorFil = document.getElementById('autorFilme')
    const dataFil = document.getElementById('dataFilme')
    const generoFil = document.getElementById('generoFilme')
    const duracaoFil = document.getElementById('duracaoFilme')
    const capaFil = document.getElementById('capaDoFilme')
    const sipnoseFil = document.getElementById('sipnoseFilme')

    tituloFil.innerHTML = title
    autorFil.innerHTML = autor
    dataFil.innerHTML = data
    generoFil.innerHTML = gen
    duracaoFil.innerHTML = duracao
    sipnoseFil.innerHTML = sip
    capaFil.setAttribute('src', capa.value)
    
    titulos.push(title)
    autores.push(autor) 
    datas.push(data)
    generos.push(gen)
    duracoes.push(duracao)
    capas.push(capa.value)
    sipnoses.push(sip )
    
    console.log(titulos);
    console.log(autores);
    console.log(datas);
    console.log(generos);
    console.log(duracoes);
    console.log(capas);
    console.log(sipnoses);
}

function salvar() {

    
}