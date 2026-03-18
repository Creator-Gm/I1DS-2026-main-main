/***************************************************************
 * versao gustavão
 */
// function prova(nota) {
//   if (nota < 5) {
//     return "reprovado";
//   } else if (nota < 7) {
//     return "recuperação";
//   } else {
//     return "aprovado";
//   }
// }
// console.log(prova(5));
// console.log(prova(7));

// pt2 solu + estra
function prova(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  if (media < 5) {
    return "reprovado";
  } else if (media < 7) {
    return "recuperação";
  } else {
    return "aprovado";
  }
}
console.log(prova(7, 10, 10, 10));
// solu 03
function final(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situação;
  if (media < 5) situação = "reprovado";
  else if (media < 7) situação = "recuperação";
  else situação = "aprovado";
  return "media " + media + "-situação " + situação;
}
console.log(final(7, 10, 10, 10));
//