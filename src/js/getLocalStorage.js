export default function getLocalStorage() {
  if (localStorage.getItem("songs") == null) {
    localStorage.setItem("songs", '{"songsNumber":1, "songs":[]}');
  }
}
