// Crie um objeto chamado aluno com as propriedades nome, idade, curso e matrícula. Adicione um método chamado mostrarInformacoes que exibe todas as informações do aluno.

const aluno = {
  nome: "João",
  idade: 18,
  curso: "Engenharia da Computação",
  matricula: 248275,

  mostrarInformacoes: function() {
    return `
    Nome: ${this.nome}
    Idade: ${this.idade}
    Curso: ${this.curso}
    Matrícula: ${this.matricula}
    `
  }
}

console.log(aluno.mostrarInformacoes());