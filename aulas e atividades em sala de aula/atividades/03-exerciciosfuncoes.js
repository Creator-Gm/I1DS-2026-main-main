/*****************************************************
Lista de Exercícios
*****************************************************/
/*
1. Crie uma função que receba como parâmetro o ano de nascimento de uma pessoa a retorne sua idade.


2. Crie uma função que receba a quantidade de combustível de um carro e retorne quantos Kms ele pode viajar com esse combustível. Considere que o
 veículo faz uma média de 12 Km/L.
*/
function subtrair(valor1, valor2) {
  return valor1 - valor2;
}

console.log("uma pessoa tem idade de =", subtrair(2026, 2009));

function comkm(valor1, valor2) {
let km = valor1 / valor2;
return km
}
let combustível = 60
let media = 12;
quantiakm = comkm(combustível, media);
console.log("voce pode andar" , quantiakm, "km!");

