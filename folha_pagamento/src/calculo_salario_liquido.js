

function calcularSalarioLiquido(bruto, INSS, IRPF, descontos) {

    let liquido = bruto - INSS - IRPF - descontos;
    
    return parseFloat(liquido).toFixed(2)

}

module.exports = calcularSalarioLiquido