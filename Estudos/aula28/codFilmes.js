function AddFilme(evento){
    evento.preventDefault()

    const title = document.getElementById('titulo').value
    const autor = document.getElementById('autor').value
    const data = document.getElementById('data').value
    const gen = document.getElementById('genero').value
    const duracao = document.getElementById('duracao').value
    const capa = document.getElementById('capa').value
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
    capaFil.

}