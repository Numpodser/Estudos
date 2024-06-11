function enviarFormulario(eventRecebido) {
    eventRecebido.preventDefault()

    const form = document.querySelector('form')

    const dadosFormulario = new FormData(form)

    const valorNome = dadosFormulario.get('nombre')
    const valorAltura = dadosFormulario.get('alt')
    const valorPeso = dadosFormulario.get('peso')
    const valorProfissao = dadosFormulario.get('profissa')
    const valorFoto = dadosFormulario.get('foto')
    let valorParagra = document.querySelector('p')
    let foto = document.querySelector('img')

    let imc = valorPeso / (valorAltura * valorAltura)
    console.log(imc);
    switch (true) {
        case imc < 18.5:
            valorParagra.textContent = (`Você ${valorNome} tendo ${valorAltura} de altura, ${valorPeso} kg de peso, está na classificação magresa, sua profissão é ${valorProfissao}.`)
            foto.setAttribute(valorFoto)
            break
        case imc > 18.5 && imc < 24.9:
            valorParagra.textContent = (`Você ${valorNome} tendo ${valorAltura} de altura, ${valorPeso} kg de peso, está na classificação normal, sua profissão é ${valorProfissao}.`)
            break
        case imc > 25 && imc < 29.9:
            valorParagra.textContent = (`Você ${valorNome} tendo ${valorAltura} de altura, ${valorPeso} kg de peso, está na classificação sobrepeso, sua profissão é ${valorProfissao}.`)
            break
        case imc > 30 && imc < 39.9:
            valorParagra.textContent = (`Você ${valorNome} tendo ${valorAltura} de altura, ${valorPeso} kg de peso, está na classificação obesidade, sua profissão é ${valorProfissao}.`)
            break
        case imc > 40:
            valorParagra.textContent = (`Você ${valorNome} tendo ${valorAltura} de altura, ${valorPeso} kg de peso, está na classificação obesidade grave, sua profissão é ${valorProfissao}.`)
            break
        default:
            valorParagra.textContent = ('valores inaválidos')
    }


}