let peso = prompt('Informe o seu peso em quilogramas, utilizando ponto quando necessário (EX: 75.5): ')
let peso2 = document.querySelector(".peso")
peso2.textContent = `O peso informado é ${peso} Kg`
let altura = prompt('Informe a sua altura em metros, utilizando ponto (Ex: 1.78): ' )
let altura2 = document.querySelector(".altura")
altura2.textContent = `A altura informada é ${altura} metros`
let imc = (peso / (altura*altura)).toFixed(2)
let imc2 = document.querySelector(".imc");

if (imc < 18.9){
  let resultado = document.querySelector(".resultado")
  resultado.textContent = `Peso está baixo! Seu imc é ${imc}`
    
}else if (imc <= 24.9) {
  let resultado = document.querySelector(".resultado")
  resultado.textContent = `Seu Peso está Normal! Seu imc é ${imc}`
}else if (imc <= 29.9){
   let resultado = document.querySelector(".resultado")
  resultado.textContent = `Você está na categoria de Sobrepeso! Seu imc é ${imc}`
}
else if(imc <= 34.9){
  let resultado = document.querySelector(".resultado")
  resultado.textContent = `Você está categoria de Obesidade (Grau I)! Seu imc é ${imc}`
}
else if (imc <= 39.9){
    let resultado = document.querySelector(".resultado")
    resultado.textContent = `Voçê está categoria Obesidade Severa(Grau II)! Seu imc é ${imc}`
}
else{
    let resultado = document.querySelector(".resultado")
    resultado.textContent = `Voçê está categoria Obesidade Mórbida(Grau III! Seu imc é ${imc}`
}
