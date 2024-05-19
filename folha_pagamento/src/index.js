const readline = require('readline');
const calculaContribuicao = require('./calculo_inss');
const calcularIRPF = require('./calculo_imposto_renda');
const calcularSalarioLiquido = require('./calculo_salario_liquido');

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

let salario = 0;

input.question("Qual o valor do seu salário bruto?", salarioBruto => {
    salario = Number(salarioBruto);
    let contribuicaoINSS = calculaContribuicao(salario)
    let contribuicaoIRPF = calcularIRPF(salario, contribuicaoINSS)
    let outrosDescontos = 0;
    let salarioLiquido = calcularSalarioLiquido(salario, contribuicaoINSS, contribuicaoIRPF, outrosDescontos)

    console.log("INSS =" + contribuicaoINSS, "IRPF = " + contribuicaoIRPF, "Salario Liquido =" + salarioLiquido)
    input.close()

    
})