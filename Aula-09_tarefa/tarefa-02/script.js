var display = document.querySelector(".texto");

let teclas = document.querySelectorAll(".tecla");

teclas.forEach((tecla) => {
  tecla.addEventListener("click", () => {
    display.innerHTML += tecla.value;
  });
});

const apagar = () => {
  display.innerHTML = '';
}

const calcular = () => {
  display.innerHTML = eval(display.innerHTML);
} 