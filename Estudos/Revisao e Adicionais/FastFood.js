function cadastrarPedido() {
    const produto = prompt('Digite o seu produto')
    const quantidade = Number(prompt('Quantas unidades você vai comprar'))
    const preco = Number(prompt('Qual o valor de cada unidade?'))
    const pedido = {
        produto,
        quantidade,
        preco
    }
    return pedido
}

function validarPedido(pedido) {

    if (pedido.quantidade <= 0) {
        alert('Quantidade deve ser maior que zero')
        return false
    }
    if (pedido.preco <= 0) {
        alert('Preço deve ser maior que zero')
        return false
    }
    if (pedido.produto.length === 0) {
        alert('Produto precisa ter um nome')
        return false
    }
    return true

}

function calcularPedidoTotal(pedido){
    const valorTotal = pedido.preco * pedido.quantidade
    return valorTotal
}
function calcularValorDesconto(total){
    if (total > 30){
        return total * 0.9
    }
    return total
}

function exibirResumoPedido(pedido, valorFinal){
    alert(`Você comprou ${pedido.quantidade} ${pedido.produto} (s) \nValor toral: ${valorFinal}`)
}

const pedidoNovo = cadastrarPedido()
const ehValido = validarPedido(pedidoNovo)

if(ehValido){
    const total = calcularPedidoTotal(pedidoNovo)
    const valorFinal = calcularValorDesconto(total)
    exibirResumoPedido(pedidoNovo, valorFinal)
} else {
    alert('Como o pedido não é valido, encerramos o processamento')
}