function mostrarNome(evento) {
    // Evitar que a página recarregue
    evento.preventDefault()
    // Importar o input de nome
    // const inputNome = document.getElementById('id_nome')
    const inputNome = document.querySelector('#id_nome')
    const paragrafo = document.querySelector('#mensagem')
    // Criar mensagem com o valor digitado no input
    const mensagem = `Olá ${inputNome.value}`
    // Adicionar mensagem no paragrafo
    paragrafo.textContent = mensagem
    // Salvar informação do nome no localStorage
    localStorage.setItem('nome', inputNome.value)
}

function buscarNome() {
    const nome = localStorage.getItem('nome')
    // Verificar se o nome existe no localStorage
    if (nome != null) {
        const paragrafo = document.querySelector('#mensagem')
        paragrafo.textContent = `Olá ${nome}`
    }
}

buscarNome()
