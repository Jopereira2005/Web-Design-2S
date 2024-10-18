const peso1 = 1.0;
const peso2 = 2.1;
console.log(peso1);
console.log(Number.isInteger(peso1));
console.log(peso2);
console.log(Number.isInteger(peso2));
const avaliacao1 = 9.45;
const avaliacao2 = 6.456;
const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media.toFixed(1)); //toFixed fixa a quantidade de casas após a vírgula
console.log(media.toString());
console.log(typeof media);
//number com n minúsculo é um tipo e com N maiúsculo é uma função
console.log(typeof Number);


var nome = "Paxe";
console.log(nome.charAt(3));
console.log(nome.charCodeAt(3));
console.log(nome.replace("xe", "xeeeee"));
console.log(nome.length);
console.log(nome.endsWith("e"));
console.log(nome.indexOf("x"));
console.log(nome.substring(0, 3));
console.log(nome.toLocaleUpperCase());
console.log("Ana,Maria,José".split(","));
console.log(nome.concat(' Rodrigo '.concat(Colombini)));
if (nome.includes("i")) { }

//Concatenação de strings
var nome = "Paxe"
let concatenacao = "Olá "+ nome + "!"
console.log(concatenacao)
//template string
let template = `Olá ${nome}!`
console.log(template)
//expressões
console.log(`1 + 1 = ${1 + 1}`)
//string up(string texto){ return texto.toUpperCase();}
const up = texto => texto.toUpperCase();
console.log(`Ei! ${up('Cuidado')}!`)

console.log("os verdadeiros...");
console.log(!!isAtivo);
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!(isAtivo = true));
console.log(!!Infinity);

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
console.log('para finalizar...');
console.log(!!('' || null || 0 || ' '));

//forma de usar expressão lógica para definir valor padrão
var nome = '';;
console.log(nome || 'Desconhecido'); //numa expressão
// lógica o javascript pega o 1º valor válido


