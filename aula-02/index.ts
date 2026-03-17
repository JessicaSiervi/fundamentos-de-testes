import { validar } from "../framework-teste"
import { randomUUID, UUID } from 'node:crypto'

interface IUsuario {
    id: number
    nome: string
}

interface ILivro {
    id: number
    titulo: string
}
interface IEmprestar {
    usuario: IUsuario
    livros: ILivro[]
}

interface IDevolver {
    
}
// Cenário de Utilização
// Sistema de Empéstimo de livros
// Requisitos:
// 1. Prazo -> O empréstimo padrão é de 7 dias.
//2. Multa -> Se o livro for entregue com atraso, cobra-se uma multa fixa de R$5,00 + R$1,00 por dia de atraso.
// 3. Limite -> cadaaluno pode pegar no máximo 3 livros simultaneamente.
// 4. Emprestimo -> O aluno deverá estar previamente cadastrado.

const usuarios = [
    {
        id: 1,
        nome: 'Jéssica'
    },
    {
        id: 2,
        nome: 'Inácio'
    }

]

const emprestimos = [
    
]

const emprestar = ({ livros, usuario }: IEmprestar): boolean => {
    const usuarioExiste = usuarios.filter(user => user.id === usuario.id)
    if (!(usuarioExiste.length > 0)) return false
    if (livros.length > 3) return false
    return true
}

validar({
    descricao: 'emprestar() - Usuário previamente cadastrado e Quantidade de livros menor que o máximo',
    esperado: true,
    atual: emprestar({
        usuario: { id: 1, nome: 'Jéssica' },
        livros: [
            { id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel' },
            { id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres' },
            { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
            { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
        ]
    }
    )
})
validar({
    descricao: 'emprestar() - Usuário previamente cadastrado e Quantidade de livros maior que o máximo',
    esperado: false,
    atual: emprestar({
        usuario: { id: 1, nome: 'Jéssica' },
        livros: [
            { id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel' },
            { id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres' },
            { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
            { id: 4, titulo: 'O Hobbit' },
        ]
    }
    )
})
validar({
    descricao: 'emprestar() - Usuário não cadastrado e Quantidade de livros menor que o máximo',
    esperado: false,
    atual: emprestar({
        usuario: { id: 10, nome: 'Jéssica' },
        livros: [
            { id: 1, titulo: 'O Senhor dos Anéis - A Sociedade do Anel' },
            { id: 2, titulo: 'O Senhor dos Anéis - As Duas Torres' },
            { id: 3, titulo: 'O Senhor dos Anéis - O Retorno do Rei' },
        ]
    }
    )
})

