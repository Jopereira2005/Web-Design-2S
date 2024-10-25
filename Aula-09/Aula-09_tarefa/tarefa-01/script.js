const alterarImagem = () => {
  document.querySelector('.image').src = './paxe.png';
}

const alterarTitulo = () => {
  document.querySelector('.title').innerHTML = 'Novo Titulo';
}

const alterarParagrafo = () => {
  document.querySelector('.paragraph').style.color = 'red'
}

const tocarAudio = () => {
  let audio = new Audio('./explosion.wav');
  audio.play();
}

const alterarBotoes = () => {
  let botoes = document.querySelectorAll('.btn_alterar');

  for(botao of botoes) {
    botao.classList.toggle('btn-danger');
  }
}