// Faça um programa que mostre os números impares em um intervalo de 0 a 100.

let length = 100

for(i = 0; i <= length; i++) {
  if(i % 2 != 0) {
    console.log(`[${i}] `);
  }
}
