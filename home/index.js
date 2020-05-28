export const home = () => {
  const mainHome = document.createElement("section");
  const text = `
    <h1>Sejam bem-vindos!</h1>
    <h3>Meus animes favoritos</h3>
    <p>Nessa página listarei alguns dos animes que mais gostei de assistir!</p>
    <p>Se você não assistiu algum desses, totalmente indico!</p>
  `;
  mainHome.innerHTML = text;
  return mainHome;
}