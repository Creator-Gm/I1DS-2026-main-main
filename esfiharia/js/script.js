document.getElementById("btnCardapio").onclick = abrirCardapio;

document.getElementById("btnCarne").onclick = adicionarCarne;
document.getElementById("btnQueijo").onclick = adicionarQueijo;
document.getElementById("btnCalabresa").onclick = adicionarCalabresa;
document.getElementById("btnFrango").onclick = adicionarFrango;

function abrirCardapio() {

    document.getElementById("cardapio").scrollIntoView();

}

function adicionarCarne() {

    alert("Esfiha de Carne adicionada ao carrinho!");

}

function adicionarQueijo() {

    alert("Esfiha de Queijo adicionada ao carrinho!");

}

function adicionarCalabresa() {

    alert("Esfiha de Calabresa adicionada ao carrinho!");

}

function adicionarFrango() {

    alert("Esfiha de Frango adicionada ao carrinho!");

}