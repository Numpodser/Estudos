let numeros = document.getElementById('nums')
let nums = []
max = 100
min = -100
for(let i = 0; i < 50; i++){
    nums.push(Math.floor(Math.random() * (max - min + 1)) + min)
}
for(i = 0; i < nums.length; i++){
    numeros.innerHTML += `${nums[i]}, \n`
}
numeros.innerHTML += '<hr>'
for(i = 0; i < nums.length; i++){
    if(nums[i] < 0){
        nums[i] = 0 
    }
    numeros.innerHTML += `${nums[i]}, \n`
}
