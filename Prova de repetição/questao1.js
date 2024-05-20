let idade = Number(prompt('Digite a sua idade:'))
switch(true){
    case idade < 18:
        alert('Você é menor de idade')
        break
    case idade >= 18 && idade < 60:
        alert('Você é adulto')
        break
    case idade >= 60:
        alert('Você é idoso')
}