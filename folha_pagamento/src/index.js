const readline = require('readline');
const calculaContribuicao = require('./calculo_inss');
const calcularIRPF = require('./calculo_imposto_renda');
const calcularSalarioLiquido = require('./calculo_salario_liquido');
const formataCPF = require('./formata_cpf');
const formataData = require('./formata_data');

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

let salario = 0.00;
let outrosDescontos = 0.00;

input.question("Qual o nome do funcionário?", nomeFuncionario => {
    
    let nome = nomeFuncionario;

    input.question("Qual a data de geração? (colocar apenas números 'ddmmaaaa')", dataGeracao => {
        
        let data = formataData(dataGeracao);
        
        input.question("Qual CPF do funcionário? (colocar apenas números)", cpfFuncionario => {
            let cpf = formataCPF(cpfFuncionario);

            input.question("Qual o valor do salário bruto do funcionáio?", salarioBruto => {
                salario = Number(salarioBruto);

                input.question("Outros descontos?", desconto => {
                    outrosDescontos = Number(desconto);
                    
                    let contribuicaoINSS = calculaContribuicao(salario)
                    let contribuicaoIRPF = calcularIRPF(salario, contribuicaoINSS)
                    let salarioLiquido = calcularSalarioLiquido(salario, contribuicaoINSS, contribuicaoIRPF, outrosDescontos)
                
                    console.log(`
                        --- Folha de Pagamento --- 
                        Data de Geração: ${data}
                        Nome: ${nome}
                        CPF: ${cpf}
                        --- ---
                        Salário Bruto: R$ ${parseFloat(salario).toFixed(2)}
                        --- Descontos ---
                        INSS: R$ ${contribuicaoINSS}
                        IRPF: R$ ${contribuicaoIRPF}
                        Outros Descontos: R$ ${parseFloat(outrosDescontos).toFixed(2)}
                        --- ---
                        Salário Líquido: R$ ${salarioLiquido}
                        `)
                    
                    input.close()   
                })   
            })   
        }) 
    })
})