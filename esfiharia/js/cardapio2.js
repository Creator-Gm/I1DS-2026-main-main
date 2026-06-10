document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
const btnVoltar = document.getElementById("btnVoltar");
btnVoltar.addEventListener("click", () => {
    window.location.href = "index.html";
});
