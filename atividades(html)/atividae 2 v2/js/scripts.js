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

console.log(lista[0][1]);
