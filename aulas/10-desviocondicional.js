// desvio de condicional
//inf condiçao simples

let anonascimento = 1999;

if (anonascimento > 2003) {
  console.log("a pessoa nasceu depois de 2003.");
}
if (anonascimento < 2003) {
  console.log("a pessoa nasceu antes de 2003.");
}
if (anonascimento == 2003) {
  console.log("a pessoa nasceu em 2003.");
}
//if false condicional
anonascimento = 1990;
if (anonascimento > 2000) {
  console.log("a pessoa nasceu depois de 2003.");
} else {
  console.log("a pessoa nasceu depois de 2003.");
}
//condiçao composta com if
const login = "admin";
const senha = "12345";
let loginuser = "admin";
let senhauser = "12345";
if (loginuser == login && senhauser == senha) {
  console.log("login realizado com sucessso!");
} else {
  console.log("acesso negado!");
}
//desvios aninhados - if-ELSE-if-ELSE
let semaforo = "verde";
if (semaforo == "vermelho") {
  console.log("pare");
} else if (semaforo == "amarelo") {
  console.log("antençao");
} else if (semaforo == "verde") {
  console.log("continue");
} else {
  console.log("opçao invalida");
}
//criando variaveis locais ( so existem dentro )
let mes = "agosto";
let dia = "15";
if (dia == 15 && mes == "agosto") {
  let mensage = "hoje e  dia 15 de agosto";
  console.log(mensage);
}
console.log("tentando acessar a variavel 'mensage' fora do escopo do if vai dar erro !!!");
// console.log(mensage);
/******************************************************
 * if tenario (if inline)
 */

let preço = 500;

let resultado = (preço <= 100)? "ta barato" : "to liso"

console.log("preço", preço, "-" , resultado);

// o codigo acima , faz exatamente mesma coisa que o codigo abaixo

if(preço <= 100){resultado = "ta barato"}else{resultado = "to liso";}

console.log("preço", preço, "-" , resultado);

/****************************************************/