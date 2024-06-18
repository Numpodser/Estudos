let contadorArmazenado = localStorage.getItem('contador')
// console.log(`O contador é ${contadorArmazenado}`);

if(contadorArmazenado){
    console.log(`O contador tem valor: ${contadorArmazenado}`);
    contadorArmazenado++
    localStorage.setItem('contador', contadorArmazenado)
    // console.log(`O contador atualizado: ${contadorArmazenado}`);
} else {
    contadorArmazenado = 1
    // localStorage.setItem('contador', contadorArmazenado)
}
