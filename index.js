let prompt = require('prompt-sync')();

let nome = prompt("Digite seu nome completo: ");
let anoNascimento
let check = 1;

while (check === 1) {
    check = 0;
    try {
        anoNascimento = prompt("Digite o ano de seu nascimento (entre 1922 e 2021): ");
        if (anoNascimento < 1922 || anoNascimento > 2021) {
            throw new Error('Ano inválido, tente novamente.')
        } else if (isNaN(anoNascimento)) {
            throw new Error('Digite seu ano de nascimento apenas com números.')
        }
    } catch (error) {
        check = 1;
        console.log(`Error de preenchimento no seu formulário: \n\n${error}`)
    }
}

let idade = 2022 - anoNascimento;
console.log(`${nome} terá ${idade} anos no ano de 2022.`)