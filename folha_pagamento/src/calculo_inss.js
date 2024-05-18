
const tetoINSS = 908.85;
let aliquota = 7.5;
let valorCalculado = 0;

function calculaContribuicao(bruto) {

    if (bruto >= 1412.01 && bruto <= 2666.68) {
        aliquota = 9;
    }else if (bruto > 2666.68 && bruto <= 4000.03) {
        aliquota = 12;
    } else if (bruto > 4000.03) {
        aliquota = 14;
    }
    
    valorCalculado = bruto * (aliquota / 100);

    if (valorCalculado > tetoINSS) {
        valorCalculado = tetoINSS
    }

    return parseFloat(valorCalculado).toFixed(2)
}

module.exports = calculaContribuicao




