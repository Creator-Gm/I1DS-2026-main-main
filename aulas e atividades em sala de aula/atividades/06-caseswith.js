/* 
            🧠 Desafio: Descobrindo o Trimestre


Você deverá criar um programa em JavaScript que identifique em qual trimestre do ano um determinado mês está.


📌 Regras do desafio
O programa deve receber um número de 1 a 12 representando o mês.
Utilize a estrutura switch case para resolver.
Exiba no console em qual trimestre o mês informado se encontra:


Mês                     Trimestre
1, 2, 3                 Primeiro trimestre
4, 5, 6                 Segundo trimestre
7, 8, 9                 Terceirotrimestre
10, 11, 12              Quarto trimestre
*/
let trimestre = "2";
switch (trimestre) {
  case "1":
    console.log("Mês: 1, 2, 3 'Primeirotrimestre' ");
    break;
  case "2":
    console.log("Mês: 4, 5, 6 'Segundotrimestre'");
    break;
  case "3":
    console.log("Mês: 7, 8, 9 'Terceirotrimestre'");
    break;
    case "4":
    console.log("Mês: 7, 8, 9 'quartotrimestre'");
    break;
    case "5":
     console.log("Mês: 10, 11, 12 'quinto trimestre'");
    break;
  default:
    console.log("opção nao existe");
    break;
}
//
let mes = 11;


switch (mes) {
  case 1:
  case 2:
  case 3:
    console.log("Primeiro trimestre!");
    break;


  case 4:
  case 5:
  case 6:
    console.log("Segundo trimestre!");
    break;
    
  case 7:
  case 8:
  case 9:
    console.log("Terceiro trimestre!");
    break;


  case 10:
  case 11:
  case 12:
    console.log("Quarto trimestre!");
    break;


  default:
    console.log("Mês incorreto!");
    break;
}