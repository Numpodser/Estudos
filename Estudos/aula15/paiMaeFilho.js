let pai = []
let mae = []
let filho = []
let papai = document.getElementById('pai')
let mamae = document.getElementById('mae')
let filhinho = document.getElementById('filho')
let linha1 = document.getElementById('linha1')
let linha2 = document.getElementById('linha2')
for(let i = 0; i < 50; i++){
    pai.push(Math.floor(Math.random() * 50))
    mae.push(Math.floor(Math.random() * 50))
}
for(i = 0; i < 50; i++){
   if(i % 2 == 0){
    filho.push(pai[i])
   } else {
    filho.push(mae[i])
   }
}