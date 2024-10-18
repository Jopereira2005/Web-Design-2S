// Escreva uma função chamada alunosMaior que recebe um array de objetos Alunos (criado acima) como entrada e retorna um novo array com apenas os alunos com idade acima de 18 anos.

const alunos = [
{
  nome: "João",
  idade: 18,
  curso: "Engenharia da Computação",
  matricula: 248275
}, 
{
  nome: "Lucas",
  idade: 17,
  curso: "Engenharia da Computação",
  matricula: 248274
},

{
  nome: "Paxe",
  idade: 19,
  curso: "Engenharia da Computação",
  matricula: 248273
},

{
  nome: "Bea",
  idade: 18,
  curso: "ADS",
  matricula: 248272
},

{
  nome: "SUS",
  idade: 8,
  curso: "Engenharia da Computação",
  matricula: 248271
},

{
  nome: "MrPaxe",
  idade: 30,
  curso: "Engenharia da Computação",
  matricula: 248270
}
];

const alunosMaiorIdade = (alunos) => {
  let resultado = [];
  for(let aluno of alunos) {
    for(let prop in aluno) {
      if (prop === "idade" && aluno[prop] > 18) {
        resultado.push(aluno);
      }
    }
  }
  return resultado;
}

console.log(alunosMaiorIdade(alunos));


