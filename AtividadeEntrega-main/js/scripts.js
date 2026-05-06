// ATIVIDADE 01
let acesa = false
const ligar = () => {
let img = document.getElementById("lampada");
if (lampada.src.includes("apagada.jpg")){
    lampada.src = "img/acesa.jpg";
}else{
        lampada.src = "img/apagada.jpg";
}};
// -----------------------------------------

// ATIVIDADE 02
const gerarImagem = () => {
let qtimg = Number(document.getElementById("inQtdImg").value);
let canvas = document.getElementById("canvas");
canvas.innerHTML= "";
if(qtimg <= 0){
    alert("o campo quntidade nao pode estar nula ou vazia");
} else{
    for (let i = 1; i <= qtimg; i++) {
        canvas.innerHTML+= `<img id="logo" src="img/logo.png" alt="Logotipo SENAI"/ >`;
    }
}
};
// -----------------------------------------

//ATIVIDADE 03
const validaForm = () => {
  
};
// -----------------------------------------

// ATIVIDADE 04
const calcular = () => {
 
};
