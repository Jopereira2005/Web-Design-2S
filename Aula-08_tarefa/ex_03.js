// Dado o array números = [10, 20, 30, 40, 50], escreva uma função que receba um array e retorne a soma de todos os elementos desse array.
let numeros = [10, 20, 30, 40, 50];

const soma = () => {
  let resultado = 0;
  for(let numero of numeros) [
    resultado += numero
  ]
  
  return resultado;
}

console.log(soma(numeros));