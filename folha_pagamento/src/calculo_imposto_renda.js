/*
1. Verifique o salário bruto do colaborador;
2. Subtraia desse valor o desconto do INSS;
3. Em seguida, consulte a tabela do IRRF para saber em qual faixa o valor-base de cada colaborador se encaixa e qual alíquota deve ser paga;
4. Aplique a alíquota sobre o valor da base e subtraia a parcela a deduzir do valor encontrado.
*/

let aliquota = 7.5;
let valorIRPF = 0;

function calcularIRPF(bruto, inss) {

    let baseIRPF = bruto - inss;
    
    if (baseIRPF > 2112.00 && baseIRPF <= 2826.65) {
        aliquota;
    }else if (baseIRPF > 2826.65 && baseIRPF <= 3751.05) {
        aliquota = 15;
    }else if (baseIRPF > 3751.05 && baseIRPF <= 4664.68) {
        aliquota = 22.5;
    }else if (baseIRPF > 4664.68) {
        aliquota = 27.5;
    }

    valorIRPF = baseIRPF * (aliquota / 100);
    
    console.log("valor", valorIRPF, "base", baseIRPF)
    if (baseIRPF <= 2112.00 && valorIRPF > 0) {
        valorIRPF = 0;
    }else if ((baseIRPF > 2112.00 && baseIRPF <= 2826.65) && valorIRPF > 158.40) {
        valorIRPF = 158.40;
    }else if ((baseIRPF > 2826.65 && baseIRPF <= 3751.05) && valorIRPF > 370.40) {
        valorIRPF = 370.40;
    }else if ((baseIRPF > 3751.05 && baseIRPF <= 4664.68) && valorIRPF > 651.73) {
        valorIRPF = 651.73;
    }else if (baseIRPF > 4664.68 && valorIRPF > 884.96) {
        valorIRPF = 884.96;
    }

    return parseFloat(valorIRPF).toFixed(2)

}

module.exports = calcularIRPF