const readline = require('readline');
const calculaContribuicao = require('./calculo_inss');

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

let salario = 0;

input.question("Qual o valor do seu salário bruto?", salarioBruto => {
    salario = Number(salarioBruto);
    let contribuicaoINSS = calculaContribuicao(salario)
    console.log(contribuicaoINSS)
    input.close()
})