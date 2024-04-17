let a = 80000
let b = 200000
let crecA = 0
let crecB = 0
cont = 0
while(a < b){
    crecA = (a/100)*3
    crecB = (b/100)*1.5
    a += crecA
    b += crecB
    cont++
}
console.log(a.toFixed(2))
console.log(b.toFixed(2))
alert(`Para que país A ultrapasse ou iguale o país B seram nescessarios ${cont} anos.`)