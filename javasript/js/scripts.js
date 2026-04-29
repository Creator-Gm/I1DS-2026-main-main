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