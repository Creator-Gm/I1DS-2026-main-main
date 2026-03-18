/***************************************************** 
Exercícios para fixação 
*****************************************************/
/* 
1. Crie uma variável e atribua o nome de uma pessoa; 
2. Crie uma variável e atribua o nome de um banco; 
3. Crie uma variável e atribua o número da agência; 
4. Crie uma variável e atribua o número da conta; 
5. Crie uma variável e atribua o saldo da conta; 
6. Imprima os dados e o saldo da conta; 
7. Efetue e imprima 5 movimentações na conta; 
8. Imprima novamente os dados e o saldo da conta; 
*/
let name = "Digo";
let nomebanco = "tigrinho bancos";
let agencianumero = 6798;
let nuconta = 456732;
let saldoconta = 3000;

console.log(
  name,
  "Esses sao os dados da sua conta no",
  nomebanco,
  "\n",
  "numero da agencia:",
  agencianumero,
  "\n",
  "numero da conta:",
  nuconta,
  "\n",
  "numero do saldo: $",
  saldoconta,
  "\n",
);

saldoconta = saldoconta + 300;
console.log(
  name,
  ", um pix foi recibido na sua conta do ",
  nomebanco,
  "no valor de 300 reais. Novo saldo",
  saldoconta,
  "- 12:40, 11/03/2026",
);

console.log("novo saldo e de R$", saldoconta);

saldoconta = saldoconta + 400;
console.log(
  name,
  ", um pix foi recebido na sua conta do ",
  nomebanco,
  "no valor de 400 reais. Novo saldo",
  saldoconta,
  "- 16:40, 30/03/2026",
);

console.log("novo saldo e de R$", saldoconta);

saldoconta = saldoconta + 7000;
console.log(
  name,
  ", um pix foi recibido na sua conta do ",
  nomebanco,
  "no valor de 7000 reais. Novo saldo",
  saldoconta,
  "- 12:30, 12/12/2020",
);

console.log("novo saldo e de R$", saldoconta);

saldoconta = saldoconta - 300;
console.log(
  name,
  ", um pix foi retirado na sua conta do ",
  nomebanco,
  "no valor de 300 reais. Novo saldo",
  saldoconta,
  "- 18:40, 11/09/2026",
);

console.log("novo saldo e de R$", saldoconta);

saldoconta = saldoconta + 700;
console.log(
  name,
  ", um pix foi recibido na sua conta do ",
  nomebanco,
  "no valor de 700 reais. Novo saldo",
  saldoconta,
  "- 14:40, 14/03/2024",
);

console.log("novo saldo e de R$", saldoconta);

console.log("-----------------------------");
console.log(
  name,
  "Esses sao os dados da sua conta no",
  nomebanco,
  "\n",
  "numero da agencia:",
  agencianumero,
  "\n",
  "numero da conta:",
  nuconta,
  "\n",
  "numero do saldo: ",
  saldoconta,
  "\n",
);
