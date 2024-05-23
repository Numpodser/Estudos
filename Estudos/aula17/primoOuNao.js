function primoOuNao(n1) {
    let primo = true
    for(let i = 2; i < n1; i++){
        let veri = n1 % i
        if(veri == 0 ){
            primo = false
        }
        // alert(veri)
        // alert(primo)
    }
    if(primo == false){
        alert(`O número ${n1} não é primo`)
    } else {
        alert(`O número ${n1} é primo`)
    }
}
let num = Number(prompt('Digite um número para saber se é primo ou não'))
primoOuNao(num)