let pares = document.getElementById("pares")
let resul = 0
for(let cont= 1; cont < 201; cont++){
    resul = cont % 2
    if(resul == 0){
        pares.innerHTML += (`O número ${cont} é par <br>`)
    }
}