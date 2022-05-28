import borrarCancion from "./js/borrarCancion";
import editarCancion from "./js/editarCancion";
import getLocalStorage from "./js/getLocalStorage";
import gurdarCancion from "./js/guardarCancion";
import imprimirCanciones from "./js/imprimirCanciones";
import mostrarForm from "./js/mostrarForm";
import validarForm from "./js/validarForm";
import "./sass/styles.scss";

document.addEventListener("DOMContentLoaded", (e) => {
  getLocalStorage();
  mostrarForm("#botonAgregar", ".btn-form", ".form");
  validarForm(".form form", ".form.editar form");
  imprimirCanciones("#template", ".canciones");
  gurdarCancion(".form form")
  borrarCancion();
  editarCancion(".form.editar");
});
