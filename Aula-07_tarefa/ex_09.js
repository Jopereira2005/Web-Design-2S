//  Escreva uma função que recebe um endereço de e-mail como argumento e retorna true se o e-mail for válido ou false caso contrário. Um e-mail válido deve conter um único símbolo @ e pelo menos um ponto . após o @

let email = "paxe@paxe.com"

function validar_email(email) {
  let email_cortado = email.split('@');

  if(email_cortado.length == 2) {
    if(email_cortado[1].includes('.')) {
      console.log("Email válido")
    } else {
      console.log("Email inválido");
    }
  } else {
    console.log("Email inválido");
  }

}

validar_email(email)