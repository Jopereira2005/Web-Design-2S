// Escreva uma função que recebe uma string como argumento e retorna o número de vogais presentes nessa string. Considere apenas vogais minúsculas (a, e, i, o, u).

let string = "Paxeeeeeee";

function cont_vogal(string) {
  let cont = 0;
  let tamanho = string.length;
  let letras = string.split('');
  let vogais = ['a', 'e', 'i', 'o', 'u']

  for(i = 0; i < tamanho; i++) {
    if(vogais.includes(letras[i])) {
     cont++;
    }
  }

  return cont;
}

console.log(cont_vogal(string));
