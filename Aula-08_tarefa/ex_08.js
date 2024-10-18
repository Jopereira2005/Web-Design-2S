// Crie um objeto chamado produto com as propriedades nome, preço, quantidade e calcularTotal. O método calcularTotal deve retornar o preço total do produto (preço multiplicado pela quantidade).

const produto = {
  nome: "Arroz",
  preco: 12.99,
  quantidade: 3,
  
  calcularTotal: function() {
    return this.preco * this.quantidade;
  }
}

console.log("Valor Total: " + produto.calcularTotal());
