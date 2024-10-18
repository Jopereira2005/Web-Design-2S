// Dado o objeto endereco com propriedades como rua, número, bairro e cidade. Faça um loop que mostre todas as propriedades e seus valores de forma genérica.

const endereco = {
  rua: "Boa Vista",
  numero: 12345,
  bairo: "Macaco Pelado",
  cidade: "Tatuí",
}

for (let prop in endereco) {
  console.log(prop +" "+endereco[prop]);
}
  