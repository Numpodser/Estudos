function verificarParOuImpar(num) {
    if (num % 2 == 0){
        alert(`O número ${num} é par`)
    } else {
        alert(`O número ${num} é impar`)
    }
}

for(let i= 0; i < 6; i++){
    verificarParOuImpar(i)
}