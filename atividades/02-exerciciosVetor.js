/*
    1. Crie um array de frutas com os seguintes elementos: Banana, Maçã,
    Pera, Uva, Morango.
    2. Adicione Tangerina no final.
    3. Adicione Goiaba no início.
    4. Exiba o conteúdo do índice 5.
    5. Exclua o elemento uva.
    6. Crie uma cópia do array apenas com os elementos com índices 2, 3 e 4.
*/
var frutas = ["banana", "Maçã", "Pera", "uva", "Morango"];
let gruu = frutas[5];
console.log("o conteudo do indice 5 e " , gruu);
console.table(frutas)
frutas.push("Tangerina");
console.log("array 2");
console.table(frutas)

frutas.unshift("Goiaba");
console.log("array 3");
console.table(frutas)

let indUva = frutas.indexOf("uva");
frutas.splice(indUva, 1);
console.log("array 4");
console.table(frutas);

let frutas2 = frutas.slice(2,5);
console.log("array 1 copia");
console.table(frutas2)