function getValidatedInput(promptMessage, validationPattern, errorMessage) {
    let input;
    while (true) {
        input = prompt(promptMessage).trim();
        input = input.replace(',', '.'); // Substitui a vírgula por ponto
        if (validationPattern.test(input)) {
            break;
        } else {
            alert(errorMessage);
        }
    }
    return parseFloat(input);
}

let pesoPattern = /^[0-9]+(\.[0-9]+)?$/;
let alturaPattern = /^[0-9]+(\.[0-9]+)?$/;

let peso = getValidatedInput('Informe o seu peso em quilogramas, utilizando ponto quando necessário (EX: 75.5): ', pesoPattern, 'Por favor, insira um peso válido utilizando ponto para decimais.');
let peso2 = document.querySelector(".peso");
peso2.textContent = `O peso informado é ${peso} Kg`;

let altura = getValidatedInput('Informe a sua altura em metros, utilizando ponto (Ex: 1.78): ', alturaPattern, 'Por favor, insira uma altura válida utilizando ponto para decimais.');
let altura2 = document.querySelector(".altura");
altura2.textContent = `A altura informada é ${altura} metros`;

let imc = (peso / (altura * altura)).toFixed(2);
let imc2 = document.querySelector(".imc");
imc2.textContent = `Seu IMC é ${imc}`;

let resultado = document.querySelector(".resultado");
if (imc < 18.5) {
    resultado.textContent = `Peso está baixo! Seu IMC é ${imc}`;
} else if (imc <= 24.9) {
    resultado.textContent = `Seu Peso está Normal! Seu IMC é ${imc}`;
} else if (imc <= 29.9) {
    resultado.textContent = `Você está na categoria de Sobrepeso! Seu IMC é ${imc}`;
} else if (imc <= 34.9) {
    resultado.textContent = `Você está na categoria de Obesidade (Grau I)! Seu IMC é ${imc}`;
} else if (imc <= 39.9) {
    resultado.textContent = `Você está na categoria de Obesidade Severa (Grau II)! Seu IMC é ${imc}`;
} else {
    resultado.textContent = `Você está na categoria de Obesidade Mórbida (Grau III)! Seu IMC é ${imc}`;
}
