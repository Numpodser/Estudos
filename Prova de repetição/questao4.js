let tarefas = []
let escolha = ''
let nomeTarefa = ''
while(escolha != 'F'){
    escolha = prompt('Escolha uma opção:\nA) Adicionar uma tarefa comum\nB) Adicionar uma tarefa prioritária\nC) Remover a primeira tarefa\nD) Remover a última tarefa\nE) Listar tarefas\nF) Encerrar o programa')
    escolha = escolha.toUpperCase()
    switch(escolha){
        case 'A':
            nomeTarefa = prompt('Digite a tarefa:')
            tarefas.push(nomeTarefa)
            break
        case 'B':
            nomeTarefa = prompt('Digite a tarefa:')
            tarefas.unshift(nomeTarefa)
            break
        case 'C':
            tarefas.shift()
            break
        case 'D':
            tarefas.pop()
            break
        case 'E':
            if(tarefas == 0){
                alert('A lista está vazia')
            } else {
                alert(tarefas)
            }
            break
        case 'F':
            alert('Encerrando programa')
            break
        default:
            alert('Opção inválida')
            break
    }
}