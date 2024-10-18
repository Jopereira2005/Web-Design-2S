// Faça uma função que mostre o dobro do número passado. Caso o número seja menor ou igual a zero, deve mostrar a mensagem “Só é aceito números positivos maiores que zero”

let num = -1;

function dobro(num) {
  if(num <= 0) {
    console.log("Só é aceito números positivos maiores que zero");
    return NaN
  } else {
    num *= 2;
    return num
  }
}

isNaN(dobro(num)) ? null : console.log(dobro(num));
