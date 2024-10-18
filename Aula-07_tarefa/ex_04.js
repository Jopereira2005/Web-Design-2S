// 4. Faça um programa que receba o nome de uma variável e mostre o <<primeiro>>.<<último nome>>@facens.br.

// Exemplo:
// A variável nome possui o conteúdo “Fabio Rodrigo Colombini”.
// Deve mostrar fabio.colombini@facens.br.

let nome = "Joao Augusto Pereira Veira";

let array_nome = (nome.toLocaleLowerCase()).split(' ');
let tamanho = array_nome.length;

console.log(`${array_nome[0]}.${array_nome[tamanho-1]}@facens.br`)