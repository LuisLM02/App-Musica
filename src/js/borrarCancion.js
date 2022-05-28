export default function borrarCancion(){
  document.addEventListener('click', (e)=>{
    if(e.target.matches('.delete')){
      let songs = JSON.parse(localStorage.getItem('songs')),
        id = Number(e.target.dataset.id),
        contador = 0;

      for(let i = 0; songs.songs.length > i; i++){
        if(songs.songs[i].id === id){
          contador = i
        }
      }

      let confirmacion = confirm(`Esta seguro de eleminar "${songs.songs[contador].name}"`)
      if(confirmacion === false) return
      songs.songs.splice(contador, 1)
      localStorage.setItem('songs', JSON.stringify(songs))
      location.reload();
    }
  })
}