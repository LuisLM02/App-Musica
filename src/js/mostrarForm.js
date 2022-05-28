export default function mostrarForm(btnMostrar, btnOcultar, display) {
  const $btnMostrar = document.querySelector(btnMostrar),
    $btnOcultar = document.querySelector(btnOcultar),
    $display = document.querySelector(display),
    $inputs = $display.querySelectorAll("input");

  $btnMostrar.addEventListener("click", (e) => {
    $display.classList.remove("none");
  });
  $btnOcultar.addEventListener("click", (e) => {
    $display.querySelector("form").reset();
    $inputs.forEach(ele => {
      ele.classList.remove("red");
    });
    $display.classList.add("none");
  });
}
