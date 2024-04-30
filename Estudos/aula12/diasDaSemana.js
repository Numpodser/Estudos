let diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo']

diasDaSemana[6] = 'DOMINGO'

diasDaSemana.push('Feriado')

// let resp = Number(prompt('Digite um número de 1 a 7 para ver o dia da semana'))

// alert(`O ${resp}° dia da semana é ${diasDaSemana[resp - 1]}`)

// indexOf

let i = diasDaSemana.indexOf('Terça')
console.log(i);

i = diasDaSemana.indexOf('Domingo')
console.log(i);

// splice
// diasDaSemana.splice(indiceInicio,quantidade)

diasDaSemana.splice(2,1)

