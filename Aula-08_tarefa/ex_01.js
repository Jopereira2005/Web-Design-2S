// Crie uma função anônima que receba nome e sobrenome e retorne o nome completo. Atribua essa função a uma variável. Chame essa variável passando "Fábio", "Colombini" e mostre o resultado no console.

const nome = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`
}

console.log(nome("Mr", "Paxe"));