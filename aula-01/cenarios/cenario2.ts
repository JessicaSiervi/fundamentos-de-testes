//👤 Cenário 2: Cadastro de Usuário (Validação de Dados) Regra de Negócio: O nome deve ter pelo menos 3 caracteres. 
//A idade deve ser entre 18 e 120 anos. A senha deve ter no mínimo 8 caracteres.

interface ICadastro {
    nome: string
    idade: number
    senha: string
}

function validarCadastro({ nome, idade, senha }: ICadastro): boolean {
    if (!nome || nome.length < 3) {
        console.error("Nome inválido")
        return false
    }

    if (idade < 18 || idade < 120) {
        console.error("Idade inválida")
        return false
    }

    if (!senha || senha.length < 8) {
        console.error("Senha inválida")
        return false
    }

    return true
}

const cadastro = { nome: "iris", idade: 17, senha: "12345678" }
const validar = validarCadastro (cadastro)

console.log("Cadastro:", validar)