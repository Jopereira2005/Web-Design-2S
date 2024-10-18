//  Escreva uma função que verifique se uma determinada string é um palíndromo (ou seja, pode ser, lida da mesma forma tanto da esquerda para a direita quanto da direita para a esquerda)

// Exemplo: arara

let string = "paxe";

function isPalindromo(string) {
  let string_inv = string.split('').reverse().join('');

  if(string_inv.toLocaleLowerCase() == string.toLocaleLowerCase()) {
    console.log(`A string ${string} é um palindromo`);
  } else {
    console.log(`A string ${string} não é um palindromo`);
  }
}

isPalindromo(string);