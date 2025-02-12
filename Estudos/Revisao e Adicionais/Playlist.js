const duracao = [100, 200, 300, 400, 500]
const musicasFav = []

function converter (tempo) {
    const minutos = parseInt (tempo / 60).toString().padStart(2, '0')
    const seg = parseInt (tempo % 60).toString().padStart(2, '0')
    const resultado = minutos + ':' + seg
}

function processarMusicas(musicas) {
    let soma = 0

    for (let i = 0; i < musicas.length; i++ ) {
        const itemAtual = musicas[i]
        const hora = converter(itemAtual)
        console.log(hora)

        if (itemAtual >= 120 && itemAtual <= 300){
            musicasFav.push(hora)
        }

        soma =+ itemAtual
    }
    console.log('As musicas favoritas são', musicasFav)
    console.log('A soma em segundos das musicas é', soma);
    console.log('A soma em minutos das musicas é', converter(soma));
};



