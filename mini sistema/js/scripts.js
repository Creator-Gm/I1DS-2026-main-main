let n = 0
let inmail = []
let innome = []
const remove = (id) => {
    let lista = document.getElementById("lista")
    let elemento = document.getElementById(id)
    lista.removeChild(elemento)

    let contagem = lista.childElementCount
    document.getElementById("contagem").innerText = contagem
    itens.foreach 
}

const edit = (id) => {
        let lista = document.getElementById("lista")
    let elemento = document.getElementById(id)
    lista.removeChild(elemento)

    let contagem = lista.childElementCount
    document.getElementById("contagem").innerText = contagem
    let nome = document.getElementById("nome");
    let email = document.getElementById("email");

    nome.value = innome[id-1]
    email.value = inmail[id-1]
}

const cadastrar = (event) => {
    // parar a propagaão padrão do evento
    event.preventDefault();


    // capturando  os valores dos campos dos elementos por id
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    // capturando o elemento de lista por id
    let lista = document.getElementById("lista");

    // criar um novo elemento <li>Nome - Email</li>
    let novoItem = document.createElement("li");
    n++
    let id = n
    novoItem.innerHTML = id + " - " + nome + " - " + email + '<button onclick="remove('+ id +')" class="removeButton">Remover</button>' + '<button onclick="edit('+ id +')" class="editButton">Editar</button>';
    novoItem.id = id
    
    innome.push(nome)
    inmail.push(email)

    lista.appendChild(novoItem);

    document.getElementById(lista[0][1]).value = "";
    let contagem = lista.childElementCount
    document.getElementById("contagem").innerText = contagem
}

let produtos = [];
let totalGeral = 0;

const adicionarProduto = () => {
  let nome = document.getElementById("produto").value;
  let qtd = parseInt(document.getElementById("quantidade").value);
  let valor = parseFloat(document.getElementById("valor").value);

  if (!nome || !qtd || !valor) {
    alert("Preencha todos os campos");
    return;
  }
  let total = qtd * valor;
  produtos.push({
    nome,
    qtd,
    valor,
    total,
  });
  atualizarTabela();
  document.getElementById("produto").value = "";
  document.getElementById("quantidade").value = "";
  document.getElementById("valor").value = "";
};

const atualizarTabela = () => {
  let tbody = document.querySelector("#tabelaProdutos tbody");
  tbody.innerHTML = "";
  produtos.forEach((item) => {
    tbody.innerHTML += `
      <tr>
        <td>${item.nome}</td>
        <td>${item.qtd}</td>
        <td>${item.valor.toFixed(2)}</td>
        <td>${item.total.toFixed(2)}</td>
      </tr>
    `;
  });
};
const finalizarCompra = () => {
  totalGeral = 0;
  produtos.forEach((item) => {
    totalGeral += item.total;
  });
  document.getElementById("total").innerText = totalGeral.toFixed(2);
  document.getElementById("valorLiquido").innerText = totalGeral.toFixed(2);
};


const aplicarDesconto = () => {
  let descontoValor =
    parseFloat(document.getElementById("descontoValor").value) || 0;

    let descontoPercentual =
    parseFloat(document.getElementById("descontoPercentual").value) || 0;
  let valorFinal = totalGeral;
  if (descontoValor > 0) {
    valorFinal -= descontoValor;
  }
  if (descontoPercentual > 0) {
    valorFinal -= totalGeral * (descontoPercentual / 100);
  }
  document.getElementById("valorLiquido").innerText = valorFinal.toFixed(2);
};
