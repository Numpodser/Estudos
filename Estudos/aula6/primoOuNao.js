let cont = 2
let primo = true
let rep = 0
let num = 3
while (cont < num  && rep < 5) {
    num = Number(prompt("DIgite um número para saber se ele é primo"))
    if (num % cont == 0) {
        primo = false
    }
    cont++
    if (primo == true) {
        alert(`O número ${num} é primo`)
    } else {
        alert(`O número ${num} não é primo`)
    }
    rep ++
} 