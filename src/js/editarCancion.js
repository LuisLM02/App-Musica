export default function editarCancion(form){
  const $display = document.querySelector(form),
    $btnClose = $display.querySelector(".btn-form.editar"),
    $form = $display.querySelector("form"),
    $inputs = $form.querySelectorAll("input"),
    songs = JSON.parse(localStorage.getItem("songs"));

  let contador = 0;

  document.addEventListener("click", (e)=>{
    if(e.target.matches('.edit')){
      $display.classList.remove("none");
      let id = Number(e.target.dataset.id);

      for(let i = 0; songs.songs.length > i; i++){
        if(songs.songs[i].id === id){
          contador = i
        }
      }
      
      $form.nameSongEdit.value = songs.songs[contador].name;
      $form.artistSongEdit.value = songs.songs[contador].artist;
      $form.generoSongEdit.value = songs.songs[contador].genero;
      $form.yearSongEdit.value = songs.songs[contador].year;
    }
  });

  $form.addEventListener("submit", (e)=>{
    if (
      !!$form.nameSongEdit.value &&
      !!$form.artistSongEdit.value &&
      !!$form.generoSongEdit.value &&
      !!$form.yearSongEdit.value
    ) {
          $form.generoSongEdit.value,
          $form.yearSongEdit.value
        
      let canciones = JSON.parse(localStorage.getItem("songs"));

      canciones.songs[contador].name = $form.nameSongEdit.value;
      canciones.songs[contador].artist = $form.artistSongEdit.value;
      canciones.songs[contador].genero = $form.generoSongEdit.value;
      canciones.songs[contador].year = $form.yearSongEdit.value;
      
      localStorage.setItem("songs", JSON.stringify(canciones));
      $form.reset();
      $display.classList.add("none");
      location.reload();
    }
  });

  $btnClose.addEventListener("click", (e)=>{
    $display.classList.add("none");
    $inputs.forEach(ele => {
      ele.classList.remove("red");
    });
    $form.reset();
  })
}