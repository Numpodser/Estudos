let max = []
let min = []
let maxima = 35
let minima = 12
// let maxi = document.getElementById('max')
// let mini = document.getElementById('min')
let saida = document.getElementById('saida')
for(let i = 0; i < 30; i++){
    let n1 = Math.round(Math.random() * (maxima - minima + 1) ) + minima
    let n2 = Math.round(Math.random() * (maxima - minima + 1) ) + minima
    if(n1 > n2){
        max.push(n1)
        min.push(n2)
    } else {
        min.push(n1)
        max.push(n2)
    }
}
for(i = 0; i < 30; i++){
    saida.innerHTML += `Max ${max[i]} | Min  ${min[i]} <br>`
}
maxi.innerHTML += max
mini.innerHTML += min
console.log(min);
console.log(max);