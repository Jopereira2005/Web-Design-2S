// let file = 'db.json';

// fetch(file) 
//   .then(response => response.json())
//   .then(obj => {
//     console.log(obj) 
//     document.querySelector(".titulo").innerHTML = obj[0].titulo;
//     document.querySelector(".paragrafo").innerHTML = obj[0].paragrafo;
//     document.querySelector(".nome").innerHTML = obj[0].nome;
//     document.querySelector(".idade").innerHTML = obj[0].idade;
//     document.querySelector(".cidade").innerHTML = obj[0].cidade;
//   })

let file = 'https://6724b51ec39fedae05b26ebd.mockapi.io/web/clients'
const data = {
  name: "PAXE",
  avatar: "avatar.png"
}

const carregar = () => {
  fetch(file) 
  .then(response => response.json())
  .then(obj => {
    console.log(obj) 
    document.querySelector(".nome").innerHTML = `${obj.at(-1).name}: ${obj.at(-1).id}`;
    document.querySelector(".foto").src = obj.at(-1).avatar;
  })
}

carregar();

const adicionar = () => {
  fetch(file, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
      body: JSON.stringify(data)
    })
  .then(_ => {
    carregar();
  })
}
