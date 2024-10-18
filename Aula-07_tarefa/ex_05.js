// Escreva um programa que imprima os números de 1 a 10 no console usando na mesma linha usando estrutura de repetição. Os números devem ser separados com um traço, ex.: 1 – 2 – 3 – ... – 10. Observação: após o número 10 não pode ter um traço.

let resultado = '';

for(i = 0; i <= 10; i++) {
  if(i < 10) {
    resultado += `${i} - `;
  } else {
    resultado += i;
  }
}

console.log(resultado);