//🛒 E-commerce (Cálculo de Frete e Cupom)Regra de Negócio: O frete é R$ 20,00 fixo. 
//Se a compra passar de R$ 300,00, o frete é grátis. Cupons de 10% não se aplicam ao valor do frete.

interface IPedido {
    valorProduto: number
    temCupom: boolean
}

function calcularTotal({ valorProduto, temCupom }: IPedido): number {

    const valorComDesconto = temCupom ? valorProduto * 0.9 : valorProduto

    const frete = valorComDesconto > 300 ? 0 : 20

    const totalFinal = valorComDesconto + frete

    return totalFinal
}


const pedido = { valorProduto: 350, temCupom: true }
const total = calcularTotal(pedido)

console.log("Total da compra:", total)