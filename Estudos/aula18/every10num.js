let nums = []
for(let i = 0; i < 10; i++){
    nums.push(Math.round(Math.random() * 3))
}
 const verifi = nums.every((atual) => {
    alert(nums)
    return atual % 2 != 0
})
 
 alert (verifi)