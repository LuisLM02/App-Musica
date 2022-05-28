import { Cancion } from "./Cancion";

export default function gurdarCancion(form) {
  const $form = document.querySelector(form);

  $form.addEventListener("submit", (e) => {
    if (
      !!$form.nameSong.value &&
      !!$form.artistSong.value &&
      !!$form.generoSong.value &&
      !!$form.yearSong.value
    ) {
      let cancion = new Cancion(
          $form.nameSong.value,
          $form.artistSong.value,
          $form.generoSong.value,
          $form.yearSong.value
        ),
        canciones = JSON.parse(localStorage.getItem("songs"));

      canciones.songsNumber++;
      canciones.songs.push(cancion);

      localStorage.setItem("songs", JSON.stringify(canciones));
      $form.reset();
      document.querySelector(".form").classList.add("none");
      location.reload();
    }
  });
}
