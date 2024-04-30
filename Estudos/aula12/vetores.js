let idades = [17, 22, 23, 19, 44, 15, 55, 66, 12, 88]
// console.log(idades[1]);
// console.log(idades);

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        console.log(idades[i]);
    }
}

let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
let n = Number(prompt('Digite o número do mês:'))
let dias = [31,28,31, 30,31,30,31,31,30,31,30,31]
alert(`Mês ${meses[n-1]} \nDias ${dias[n-1]}`)