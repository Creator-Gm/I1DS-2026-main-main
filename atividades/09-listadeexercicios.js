var nome = "Paulo";
var idade = 16;
var cidade = "ChiqueChiquebahia";
console.log("Nome:", nome, "| idade?", idade, "| cidade?", cidade);
let numero1 = 4;
let numero2 = 5;
soma1 = numero1 + numero2;
console.log("a soma e", soma1);
let numeros1 = 10;
let numeros2 = 5;
sub = numeros1 - numeros2;
console.log("a subtração e", sub);
let numer1 = 4;
let numer2 = 5;
mult = numer1 * numer2;
console.log("a multiplicação e", mult);
let nume1 = 4;
let nume2 = 5;
diva = nume1 / nume2;
console.log("a divisão e", diva);
console.log(5 % 4);

if (diva % 2 === 0) {
  console.log("Número par");
}

function cont(base, altura) {
  return base * altura;
}

let are = cont(10, 5);
console.log("A área do retângulo é: " + are);

let paral = 10 * 2 * 5;

console.log("volume do paralelepipedo e", paral);

// Defina o valor do produto
let valorProduto = 100.0;

// Calcule 10% de desconto
desconto = valorProduto * 0.1;

// Calcule o valor final
valorFinal = valorProduto - desconto;

console.log("Desconto: R$ ", desconto);
console.log("Valor Final: R$", valorFinal);

function skoll(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
let celsius = 25;
Fahrenheit = skoll(celsius);
console.log(celsius, "°C é igual a ", Fahrenheit);

let peso = 80;
let altura = 1.7;
console.log("imc e ", peso / (altura * altura));

function skol(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
let media = skol(10, 6, 7);
console.log("media dos tres numeros  =", media);

let delta = 10 * 10 - 4 * 15 * 20;
console.log("o valor de delta", delta);

let h = 4;
minutos = 60 * h;
segu = 60 * minutos;
console.log("4 horas em minutos e ", minutos, " e segundos sao", segu);

let num11 = 10;
if (num11 > 0) {
  console.log("11:", num11, "é positivo");
} else if (num11 < 0) {
  console.log("11:", num11, "é negativo");
} else {
  console.log("11:", "O número é zero");
}

let num12 = 7;
if (num12 % 2 === 0) {
  console.log("12:", num12, "é par");
} else {
  console.log("12:", num12, "é ímpar");
}

let num13 = 9;
if (num13 % 3 === 0) {
  console.log("13:", num13, "é múltiplo de 3");
} else {
  console.log("13:", num13, "não é múltiplo de 3");
}

let nota = 6.5;
if (nota >= 7) {
  console.log("14: Aprovado");
} else if (nota >= 5) {
  console.log("14: Recuperação");
} else {
  console.log("14: Reprovado");
}

let idadeVoto = 17;
if (idadeVoto < 16) {
  console.log("15: Não pode votar");
} else if (idadeVoto >= 18 && idadeVoto <= 70) {
  console.log("15: Voto obrigatório");
} else {
  console.log("15: Voto facultativo (opcional)");
}

let num16 = 25;
if (num16 >= 10 && num16 <= 50) {
  console.log("16:", num16, "está entre 10 e 50");
} else {
  console.log("16:", num16, "está fora do intervalo");
}

let usuario = "admin";
let senha = "123";
if (usuario === "admin" && senha === "123") {
  console.log("17: Login realizado com sucesso!");
} else {
  console.log("17: Usuário ou senha incorretos.");
}

let n1 = 15,
  n2 = 30;
if (n1 > n2) {
  console.log("18: O maior é", n1);
} else {
  console.log("18: O maior é", n2);
}

let a = 10,
  b = 25,
  c = 15;
if (a >= b && a >= c) {
  console.log("19: O maior é", a);
} else if (b >= a && b >= c) {
  console.log("19: O maior é", b);
} else {
  console.log("19: O maior é", c);
}

let idadePessoa = 65;
if (idadePessoa < 12) {
  console.log("20: Criança");
} else if (idadePessoa < 18) {
  console.log("20: Adolescente");
} else if (idadePessoa < 60) {
  console.log("20: Adulto");
} else {
  console.log("20: Idoso");
}
let semana = "2";
switch (semana) {
  case "2":
    console.log("Segunda ");
    break;
  case "3":
    console.log("terça");
    break;
  case "4":
    console.log("quarta");
    break;
  case "5":
    console.log("quinta");
    break;
  case "6":
    console.log("sexta");
    break;
  case "7":
    console.log("sabado");
    break;
  case "1":
    console.log("domingo");
    break;
  default:
    console.log("O dia foi selecionado incorretamente.");
    break;
}
let mes = 11;
switch (mes) {
  case 1:
    console.log("Mês janeiro.");
    break;
  case 2:
    console.log("Mês fevereiro.");
    break;
  case 3:
    console.log("Mês março.");
    break;
  case 4:
    console.log("Mês abril.");
    break;
  case 5:
    console.log("Mês maio.");
    break;
  case 6:
    console.log("Mês junho.");
    break;
  case 7:
    console.log("Mês julho.");
    break;
  case 8:
    console.log("Mês agosto.");
    break;
  case 9:
    console.log("Mês setembro.");
    break;
  case 10:
    console.log("Mês outubro.");
    break;
  case 11:
    console.log("Mês novembro.");
    break;
  case 12:
    console.log("Mês dezembro.");
    break;

  default:
    console.log("O número do mês foi selecionado incorretamente.");
    break;
}

let mes2 = 5;
switch (mes2) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("1° trimestre.");
    break;
  case 5:
  case 6:
  case 7:
  case 8:
    console.log("2° trimestre.");
    break;
  case 9:
  case 10:
  case 11:
  case 12:
    console.log("3° trimestre.");
    break;

  default:
    console.log("O número do mês foi selecionado incorretamente.");
    break;
}

let selecao = 1;

switch (selecao) {
  case 1:
    console.log("Menu somar foi selecionado.");
    break;
  case 2:
    console.log("Menu subtrair foi selecionado.");
    break;
  case 3:
    console.log("Menu multiplicar foi selecionado.");
    break;
  case 4:
    console.log("Menu dividir foi selecionado.");
    break;
  default:
    console.log("Não foi possível encontrar esse menu.");
    break;
}

let avaliacao = "A";

switch (avaliacao) {
  case "A":
    console.log("Seu resultado foi", avaliacao + ", excelente.");
    break;
  case "B":
    console.log("Seu resultado foi", avaliacao + ", bom.");
    break;
  case "C":
    console.log("Seu resultado foi", avaliacao + ", regular.");
    break;
  case "D":
    console.log("Seu resultado foi", avaliacao + ", ruim.");
    break;

  default:
    console.log("Não foi possível encontrar seu resultado.");
    break;
}

/*
PARTE 4
*/

console.log("");
console.log("PARTE 4 – Laço FOR (26 a 35) ------------------\n");

for (let i = 1; i <= 100; i++) {
  console.log(i);
}

for (let i = 101; i == 1; i--) {
  console.log(i);
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 == 0) console.log(i);
}

for (let i = 1; i <= 50; i++) {
  if (i % 2 != 0) console.log(i);
}

let soma = 0;
for (let i = 1; i <= 100; i++) {
  soma += i;
}
console.log(soma);

let nParaFat = 15;
let fatorial = 1;

for (let i = 1; i <= nParaFat; i++) {
  fatorial *= i;
}
console.log(fatorial);

let nParaTab = 2;

for (let i = 1; i <= 10; i++) {
  console.log(nParaTab * i);
}

let somaPar = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) somaPar++;
}

console.log("Entre 1 e 100 há", somaPar, "numeros pares.");

let somaMult5 = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) somaMult5++;
}

console.log("Entre 1 e 100 há", somaMult5, "numeros múltiplos de 5.");

for (let i = 0; i < 10; i++) {
  let ast = "";
  for (let i2 = 0; i2 < i; i2++) {
    ast += "*";
  }
  console.log(ast);
}

/*
PARTE 5 
*/

console.log("");
  console.log("PARTE 5 – Vetores (36 a 42) ------------------\n");

  let array = [10, 8, 9, 7, 6, 4, 2, 6, 8, 17];

  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  let soma2 = 0;
  for (let i = 0; i < array.length; i++) {
    soma2 += array[i];
  }
  console.log("o valor do array e", soma2);

  let soma3 = 0;
  for (let i = 0; i < array.length; i++) {
    soma3 += array[i];
  }
  console.log("o valor da media do array e", soma3 / array.length);

  let soma4 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > soma4) {
      soma4 = array[i];
    }
  }
  console.log("o maior valor e", soma4);
  let menor2 = Number.MAX_VALUE;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < menor2) {
      menor2 = array[i];
    }
  }
  console.log("o menor valor e", menor2);

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      console.log("42:", array[i], "é par");
    } else {
      console.log("42:", array[i], "é ímpar");
    }
  }
  for (let i = 0; i < array.length; i++) {
  array[i] *= 2;
  }
  console.table(array);
  /*
  parte 6
  */

let matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.table(matriz2);
for (let linha = 0; linha < matriz2.length; linha++) {
  for (let coluna = 0; coluna < matriz2[0].length; coluna++) {
    matriz2[linha][coluna] *= 1;
  }
}

for (let linha = 0; linha < matriz2.length; linha++) {
  for (let coluna = 0; coluna < matriz2[0].length; coluna++) {
    if (linha == coluna) console.log("Elemento da diagonal:", matriz2[linha][coluna])
  }
}
for (let linha = 0; linha < matriz2.length; linha++) {
  for (let coluna = 0; coluna < matriz2[0].length; coluna++) {
    if (linha == coluna) 
