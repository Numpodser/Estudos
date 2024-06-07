function enviarFormulario(eventRecebido) {
    eventRecebido.preventDefault()

    const form = document.querySelector('form')

    const dadosFormulario = new FormData(form)

    const valorNome = dadosFormulario.get('nome')
    const valorAltura = dadosFormulario.get('alt')
    const valorPeso = dadosFormulario.get('peso')
    const valorProfissao = dadosFormulario.get('profissa')
    const valorFoto = dadosFormulario.get('foto')

    let imc = valorPeso / (valorAltura*valorAltura)
    switch(true){
        case imc < 18.5:
            
    }


}