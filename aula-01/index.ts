// Cenário de Utilização
// Regra de Negócio: O aluno ganha XP por tarefa concluída.
// Ao atingir 1000XP, ele sobe de nível. Tarefas entregues com atraso
// rendem apenas 50% do XP. Existe um multiplicador de "Combo" para quem
// entrega 3 tarefas seguidas no prazo.
// cada tarefa vale 200xp
interface IEntregarTarefa {
    idAluno: number,
    tarefa: ITarefa
}

interface ITarefa {
    id: number
    titulo: string
    prazo: Date
}

const tarefasParaEntrega: ITarefa[] = [
    { id: 1, titulo: 'Configurar ambiente do projeto', prazo: new Date('2026-03-05') },
    { id: 2, titulo: 'Criar testes unitários de autenticação', prazo: new Date('2026-03-07') },
    { id: 3, titulo: 'Implementar validação de formulário', prazo: new Date('2026-03-08') },
    { id: 4, titulo: 'Refatorar módulo de cadastro', prazo: new Date('2026-03-10') },
    { id: 5, titulo: 'Corrigir bug de cálculo de desconto', prazo: new Date('2026-03-12') },
    { id: 6, titulo: 'Escrever documentação da API', prazo: new Date('2026-03-14') },
    { id: 7, titulo: 'Adicionar testes de integração', prazo: new Date('2026-03-16') },
    { id: 8, titulo: 'Otimizar consulta ao banco de dados', prazo: new Date('2026-03-18') },
    { id: 9, titulo: 'Implementar tela de relatório', prazo: new Date('2026-03-20') },
    { id: 10, titulo: 'Revisar e ajustar regras de negócio', prazo: new Date('2026-03-22') }
]

let aluno = {
    id: 110,
    nome: 'Daniel',
    xp: 0,
    nivel: 0,
    multiplicadorCombo: false
}

function entregarTarefa({ idAluno, tarefa }: IEntregarTarefa): boolean {
    if (!idAluno || !tarefa) {
        return false
    }
    let totalXp = true
    const dataAtual = new Date();
    if (tarefa.prazo < dataAtual) {
        totalXp = false
    }

    const xpRecebida = totalXp ? 200 : 100

    aluno = { ...aluno, xp: aluno.xp + xpRecebida }

    return true;
}

const tarefaSelecionada = tarefasParaEntrega[0]
const entregaRealizada = entregarTarefa({ idAluno: aluno.id, tarefa: tarefaSelecionada })

console.log('Entrega realizada:', entregaRealizada)
console.log('Aluno atualizado:', aluno)


