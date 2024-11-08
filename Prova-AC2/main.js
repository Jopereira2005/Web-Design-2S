let container = document.querySelector(".card_container");
const form = document.querySelector("#form")
var contador = 0;
var lista = [];
container.innerHTML = '';

form.addEventListener("submit", function(e) {
  e.preventDefault();
});

const carregar = () => {
  lista.map(item => {
    let card = `
    <div class="card m-2" style="width: 18rem;">
        <img src="https:/picsum.photos/100/50?random=${contador}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${item.titulo}</p>
          <button class="btn btn-danger" onclick="apagar(${(item.id - 1)})">Apagar</button>
        </div>
    </div>
    `
    contador++
    container.innerHTML += card;
  })
}

const enviar = () => {
  let titulo = document.querySelector("#titulo").value;
  let data = {
    "id": (lista.length + 1),
    "titulo": titulo
  }

  lista.push(data);
  container.innerHTML = '';
  console.log(lista);
  carregar();
}

const apagar = (id) => {
  lista.splice(id, 1);
  container.innerHTML = ''
  carregar();
}

const apagar_tudo = () => {
  lista = [];
  container.innerHTML = ''
}

