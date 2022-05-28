export default function imprimirCanciones(template, div){
  const $template = document.querySelector(template).content,
    $fragment = document.createDocumentFragment(),
    $div = document.querySelector(div),
    song = JSON.parse(localStorage.getItem('songs'));

  let contador = 1;

  if(song.songs.length < 1) return;

  song.songs.forEach(ele => {
    $template.querySelector(".num-cancion").textContent = contador++ + " - ";
    $template.querySelector(".title-cancion").textContent = ele.name;
    $template.querySelector(".artist").textContent = ele.artist;
    $template.querySelector(".year").textContent = ele.year;
    $template.querySelector(".genero").textContent = ele.genero;

    $template.querySelector('.edit').dataset.id = ele.id;
    $template.querySelector('.delete').dataset.id = ele.id;

    let $clone = document.importNode($template, 'true');
    $fragment.appendChild($clone);
  })
  
  $div.innerHTML= " ";
  $div.appendChild($fragment);
}