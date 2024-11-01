const url = "https://6724b51ec39fedae05b26ebd.mockapi.io/web/animal"
let lista = document.querySelector(".lista");
const formulario = document.querySelector("#formulario");
lista.innerHTML = '';

formulario.addEventListener("submit", function(e) {
  e.preventDefault();
});

const carregar = () => {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.map(item => {
      let div = document.createElement("div");
      div.classList.add = "div";
  
      let nome = document.createElement("h3");
      nome.classList.add = "nome";
      nome.textContent = `Nome: ${item.nome}`;
      div.appendChild(nome);

      let raca = document.createElement("p");
      raca.classList.add = "raca";
      raca.textContent = `Raça: ${item.raca}`;
      div.appendChild(raca);

      let idade = document.createElement("p");
      idade.classList.add = "idade";
      idade.textContent = `Idade: ${item.idade}`; 
      div.appendChild(idade);

      lista.appendChild(div);
    })
  })
}

carregar();

const enviar = () => {
  let formData = new FormData(formulario);
  let data = Object.fromEntries(formData.entries());
  console.log(data);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(_ => {
    carregar();
  })
}