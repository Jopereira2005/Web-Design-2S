// Escreva uma função chamada encontraMaiorNumero que recebe um array de números como entrada e retorna o maior número encontrado no array.

const encontraMaiorNumero = (numeros) => {
  numeros.sort((a, b) => b - a);
  return numeros[0];
}

console.log(encontraMaiorNumero([23, 21, 6, 45, 34]))
