let candidatos = []
for(let i = 1; i <= 10; i++){
    let inscri = Number(prompt(`Digite a inscriçao do ${i}° jogador`))
    candidatos.push(inscri)
}

let pares = candidatos.filter ((n) => n % 2 == 0)
let impar = candidatos.filter ((n) => n % 2 != 0)

if(pares.length == impar.length){
    alert('Os times estão equilibrados')
} else {
    alert('Os times não estão equilibrados')
}