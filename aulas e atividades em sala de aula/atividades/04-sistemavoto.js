/*****************************************************
            Atividade / Desafiadora
*****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e
    retorne uma frase dizendo se ela pode votar ou não, 
    e se o voto é obrigatório ou opcional.
*/

//condiçao composta com if
function podeVotar(idade) {
  let frase;
  if (idade < 16) {
    frase = "nao pode votar";
  } else if (idade >= 18 && idade <= 65) {
    frase = "pode votar , e e obrigatório!";
  } else {
    frase = "pode votar, mas e opcional";
  }
  return frase;
}
let idade = 23;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 25;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 12;
console.log("Idade:", idade, "-", podeVotar(idade));
idade = 57;
console.log("Idade:", idade, "-", podeVotar(idade));
/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/
console.log("-----------------------------------------------------------");

function prova(nota) {
  let frase;
  if (nota <= 5) {
    frase = "reprovado";
  } else if (nota >= 5 && nota <= 6.5) {
    frase = "recuperação";
  } else if (nota >= 7) {
    frase = "aprovado";
  }
  return frase;
}
let nota = 5;
console.log("voce tirou nota:", nota, "-", prova(nota));
nota = 10;
console.log("voce tirou nota:", nota, "-", prova(nota));
nota = 1;
console.log("voce tirou nota:", nota, "-", prova(nota));
nota = 6.5;
console.log("voce tirou nota:", nota, "-", prova(nota));
/***************************************************************
 * versao gustavão
 */
function prova(nota) {
  if (nota < 5) {
    return "reprovado";
  } else if (nota < 7) {
    return "recuperação";
  } else {
    return "aprovado";
  }
}
console.log(prova(5));
console.log(prova(7));