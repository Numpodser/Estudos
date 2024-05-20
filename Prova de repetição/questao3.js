let sensor = [1, 3, 7, 8, 3, 5, 3, 0]
let contador = 0
for(let i = 0; i < sensor.length; i++){
    if(sensor[i]  == 3){
        contador++
    }
}
alert(`O alerta crítico aparece ${contador} vezes`)