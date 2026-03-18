/* 
🧠 Desafio de Programação – Sistema de Média Escolar Switch Case
🎯 Objetivo


Criar um programa em JavaScript com switch case que calcule a média final de um aluno e informe sua situação no final do ano.


📌 Regras do programa
1. O programa deve receber 4 notas (de 0 a 10).
2. Calcular a média das notas.
3. Informar a situação do aluno de acordo com a média:


Média                   Situação
menor que 5             Reprovado
entre 5 e 6.9           Recuperação
maior ou igual a 7      Aprovado
*/

let mes = 3;


switch (mes) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("reprovado");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("aprovado");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("recuperação");
    break;
  default:
    console.log("algo esta errado");
    break;
}
function skoll(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situação;
  if (media < 5) situação = "reprovado";
  else if (media < 7) situação = "recuperação";
  else situação = "aprovado";
  return "media " + media + "-situação " + situação;
}
console.log(skoll(7, 8, 9, 5));
console.log(skoll(7, 5, 9, 1));
console.log(skoll(7, 10, 10, 1));
console.log(skoll(7, 1, 0, 7));
//
let n1 = 7;
let n2 = 8;
let n3 = 6;
let n4 = 5;


// Calculando a média
let media = (n1 + n2 + n3 + n4) / 4;

//Usando switch case com boolean (true)
switch (true) {
  case media < 5:
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: Reprovado");
    break;


  case media < 7:
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: Recuperação");
    break;


  case media >= 7:
    console.log("Média: " + media.toFixed(2));
    console.log("Situação: Aprovado");
    break;


  default:
    console.log("Erro no cálculo");
    break;
}

