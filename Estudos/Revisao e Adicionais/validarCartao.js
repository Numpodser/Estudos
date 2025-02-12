function validar (numCartao){
    if (numCartao.length !== 16){
        console.log('O cartão precisa ter 16 digitos')
        return
    }
    if (numCartao.startsWith('0')){
        console.log ('O cartão não pode começar com 0')
        return
    }
    if (isNaN(numCartao)){
        console.log ('O cartao só pode conter números')
        return
    }
    console.log ('Cartão valido')
}