const btnVoltar = document.getElementById("btnVoltar");
const btnFinalizar = document.getElementById("btnFinalizar");

btnVoltar.addEventListener("click", () => {
    window.location.href = "index.html";
});


btnFinalizar.addEventListener("click", () => {
    alert("Pedido finalizado!");
});