// dado um vetor, calcule e exiba a quantidade de pares e de
// impares

let numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2];

let par = 0;
let impa = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) par++;
  else impa++;
}
console.log("a quantidade de pares e de", par);
console.log("a quantidade de impares e de", impa);
console.log("********************************************");
// dado vetor, mutiplique todos os seus elementos por 3
console.table(numeros);
for (let i = 0; i < numeros.length; i++) {
  numeros[i] *= 3;
}
console.table(numeros);
// dada uma matriz 2x3, imprima todos os seus elementos com as respectivas posiçoes

let matriz = [[8,4,1], [3,7,8],]

console.table(matriz);
