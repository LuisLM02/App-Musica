export class Cancion {
  constructor(name, artist, genero, year) {
    this.name = name;
    this.artist = artist;
    this.genero = genero;
    this.year = year;
    this.id = JSON.parse(localStorage.getItem("songs")).songsNumber;
  }
}
