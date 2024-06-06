// Mudar imagem para https://pbs.twimg.com/profile_images/1425857676110667778/JyjokcxD_400x400.jpg

// 1- Buscar o elemento no HTML
let imagem = document.querySelector('img')

// 2- Mudar o atributo src da imagem usando setAttribute
imagem.setAttribute('src', 'https://pbs.twimg.com/profile_images/1425857676110667778/JyjokcxD_400x400.jpg')

// Importar botoes e inputs
let inputIdade = document.querySelector('#id_idade')
let inputNome = document.querySelector('#id_nome')
let botao = document.querySelector('button')

// Acionar um alerta quando o botao for clicado
botao.onclick = () => {
    // Acessar os valores dos elementos por meio do .value
    alert(`Idade: ${inputIdade.value}\nNome: ${inputNome.value}`)
}
