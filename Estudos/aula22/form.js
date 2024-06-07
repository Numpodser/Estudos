function enviarFormulario(eventRecebido) {
    eventRecebido.preventDefault()

    const form = document.querySelector('form')

    const dadosFormulario = new FormData(form)
    const valorNome = dadosFormulario.get('nome_usuario')
    const valorEmail = dadosFormulario.get('email_usuario')
    const valorMensagem = dadosFormulario.get('mensagem_usuario')

    alert(`Os valores digitados foram:\n ${valorNome}\nEmail: ${valorEmail}\nMensagem: ${valorMensagem}`)

}