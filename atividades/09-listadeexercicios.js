var nome = "Paulo";
var idade = 16;
var cidade = "ChiqueChiquebahia";
console.log("Nome:", nome, "| idade?", idade, "| cidade?", cidade);
let numero1 = 4;
let numero2 = 5;
soma = numero1 + numero2;
console.log("a soma e", soma);
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

let b = 10;
c = 20;
a = 15;
delta = b * b - 4 * a * c;
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


let n1 = 15, n2 = 30;
if (n1 > n2) {
    console.log("18: O maior é", n1);
} else {
    console.log("18: O maior é", n2);
}


let a = 10, b = 25, c = 15;
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
     console.log("Mês: 10, 11, 12 'quinto semana'");
    break;
     case "6":
     console.log("Mês: 10, 11, 12 'quinto trimestre'");
    break;
     case "7":
     console.log("Mês: 10, 11, 12 'quinto trimestre'");
    break;
  default:
    console.log("opção nao existe");
    break;
}
