interface IParcela {
    valor: number
    parcelas: number
}

interface IResponseParcelar {
    valorFinal: number
    valorParcela: number
    quantidadeParcelas: number
    parcelamentoValido: boolean
}

function parcelar({valor, parcelas}: IParcela): IResponseParcelar {

// Sistema de Parcelamento 
// Requisitos:
// 1. Valor minimo -> Valor minimo da parcela é de R$20,00
// 2. Maximo de parcelas -> O número máximo de parcelas é 12
//3. Desconto -> Se a parcela for de 1x, tem desconto de 5%
// 4. Juros -> De 2x a 6x, é sem juros, de 7x a 12x, juros de 2% ao mes sobre o valor total

    let response: IResponseParcelar = {
        valorFinal: 0,
        valorParcela: 0,
        quantidadeParcelas: 0,
        parcelamentoValido: false
    }

    if (valor < 20 || parcelas < 1 || parcelas > 12){
        return response 
    }

    if (parcelas === 1) {
        const valorComDesconto = valor * 0.95;
        if (valorComDesconto < 20) {
            return response
        }

        response = {
            parcelamentoValido: true,
            valorFinal: valorComDesconto,
            valorParcela: valorComDesconto,
            quantidadeParcelas: parcelas
        }
    } else if (parcelas >= 2 && parcelas <= 6) {
        response = {
            parcelamentoValido: true,
            valorFinal: valor,
            valorParcela: valor / parcelas,
            quantidadeParcelas: parcelas
        }
    } else if (parcelas >= 7 && parcelas <= 12) {
        const juros = 0.02 * (parcelas - 1);
        const valorComJuros = valor * (1 + juros);
        response = {
            parcelamentoValido: true,
            valorFinal: valorComJuros,
            valorParcela: valorComJuros / parcelas,
            quantidadeParcelas: parcelas
        }
    }

    return response
}

const teste = parcelar({valor: 240, parcelas: 12})
console.log(teste)