export default function validarForm(form, formEdit) {
  const $form = document.querySelector(form),
    $formEdit = document.querySelector(formEdit);

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!$form.nameSong.value) {
      $form.nameSong.classList.add("red");
    }
    if (!$form.artistSong.value) {
      $form.artistSong.classList.add("red");
    }
    if(!$form.generoSong.value) {
      $form.generoSong.classList.add("red");
    }
    if (!$form.yearSong.value) {
      $form.yearSong.classList.add("red");
    }
  });
  $form.addEventListener("change", (e) => {
    if ($form.nameSong.value) {
      $form.nameSong.classList.remove("red");
    }
    if ($form.artistSong.value) {
      $form.artistSong.classList.remove("red");
    }
    if ($form.generoSong.value) {
      $form.generoSong.classList.remove("red");
    }
    if ($form.yearSong.value) {
      $form.yearSong.classList.remove("red");
    }
  });

  $formEdit.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!$formEdit.nameSongEdit.value) {
      $formEdit.nameSongEdit.classList.add("red");
    }
    if (!$formEdit.artistSongEdit.value) {
      $formEdit.artistSongEdit.classList.add("red");
    }
    if(!$formEdit.generoSongEdit.value) {
      $formEdit.generoSongEdit.classList.add("red");
    }
    if (!$formEdit.yearSongEdit.value) {
      $formEdit.yearSongEdit.classList.add("red");
    }
  });
  $formEdit.addEventListener("change", (e) => {
    if ($formEdit.nameSongEdit.value) {
      $formEdit.nameSongEdit.classList.remove("red");
    }
    if ($formEdit.artistSongEdit.value) {
      $formEdit.artistSongEdit.classList.remove("red");
    }
    if ($formEdit.generoSongEdit.value) {
      $formEdit.generoSongEdit.classList.remove("red");
    }
    if ($formEdit.yearSongEdit.value) {
      $formEdit.yearSongEdit.classList.remove("red");
    }
  });
}
