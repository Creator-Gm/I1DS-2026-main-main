//       laço de  repetiçao - for (para)
//o professor te colocou de castigo e pediu para voce escrever  mil vezes a frese 
// "eu vou prestar antençao e anotar tudo"
//let i = 0 => primeiro utilizo uma variavel de controle
//i<1000 => condiçao de repetiçao 
// i++ => aumenta a variavel do controle para nao travar e somar 
for (let i = 0; i < 1000; i++) {//i++ == i = i+1
console.log("eu vou prestar antençao as aulas e anotar tudo! ");
}

// escreva todos os numeros de 1 a 20
for (let i = 1; i < 20; i++) {
    console.log(i);
    
}
// escreva todos os numeros pares de 1 a 20
for (let i = 0; i <= 20; i+= 2) {
    console.log(i);
}
for (let i = 0; i <= 20; i+= 2) {
   if (i % 2 == 0) console.log(i);
   // % => resto da divisão
   // i % 2 == 0 => se o resto da divisão de i por 2 for 0, ele mostra i
}
// dado um vetor [array] , calcule e exiba o somatorio de seus elementos
var numeros = [ 5, 6, 8, 14, 0, 6, 9, 7, 2];
let soma =  0;

console.log(numeros.length)
        // numeros.length => mostra a quantidade de itens do array

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log(soma);