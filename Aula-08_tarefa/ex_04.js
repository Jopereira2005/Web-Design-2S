// Dado o array números = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], escreva uma função que receba um array e retorne um array de números ímpares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const impares = () => {
  let resultado = [];
  for(let numero of numeros) {
    if(numero % 2 != 0) {
      resultado.push(numero);
    }
  }
  return resultado;
}

console.log("Impares: " + impares(numeros));