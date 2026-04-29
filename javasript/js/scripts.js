let contador = document.getElementById("contador");
const aumentar = () => {
  let vaatual = parseInt(contador.innerHTML);
  vaatual++;
  contador.innerHTML = vaatual;
};
const diminuir = () => {
  let vaatual = parseInt(contador.innerHTML);
  vaatual--;
  contador.innerHTML = vaatual;
};
const zerar= () => {
  let vaatual = parseInt(contador.innerHTML);
  vaatual = 0;
  contador.innerHTML = vaatual;
};
//exercicio 02
const mudarcor = () => {
    //capturar a cor selecionada pelo usuario
let cor = document.getElementById("colorpi").value;

//buscar o elemento alvo 'quadro
let quadro = document.getElementById("quadro");
//aplicar cor
quadro.style.background = cor
}
/* EXERCICIO 03 */
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let resultado = document.getElementById("resultado");

const somar = () => {
  let valor = parseFloat(num1.value) + parseFloat(num2.value);
  resultado.innerText = valor;
};

const subtrair = () => {
  let valor = parseFloat(num1.value) - parseFloat(num2.value);
  resultado.innerText = valor;
};

const multiplicar = () => {
  let valor = parseFloat(num1.value) * parseFloat(num2.value);
  resultado.innerText = valor;
};

const dividir = () => {
  let valor = parseFloat(num1.value) / parseFloat(num2.value);
  resultado.innerText = valor;
};