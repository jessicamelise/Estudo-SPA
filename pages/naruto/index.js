export const naruto = () => {
  const mainNaruto = document.createElement("section");
  const text = `
    <h1>Naruto</h1>
    <h3>
      É uma série de mangá escrita e ilustrada por Masashi Kishimoto, 
      que conta a história de Naruto Uzumaki, um jovem ninja que constantemente 
      procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de 
      sua vila
    </h3>
    <p>
      A história é dividida em duas partes, a primeira parte se passa nos 
      anos da pré-adolescência de Naruto, e a segunda parte se passa em sua 
      adolescência. 
    </p>
    <p>
      O mangá foi adaptado para uma série de anime produzida pelo Studio Pierrot 
      e Aniplex, que teve os seus 220 episódios transmitidos pela TV Tokyo no 
      Japão de 2002 a 2007; a adaptação brasileira da série foi exibida na Cartoon 
      Network e no SBT, e atualmente é exibido nos serviços de streaming Crunchyroll, 
      Netflix e Claro Vídeo.
    </p>
    <p>
      Essas informações foram retiradas do site
      <a href="https://pt.wikipedia.org/wiki/Naruto">Wikipedia</a>, 
      acesse para ver o artigo completo.
    </p>
  `;
  mainNaruto.innerHTML = text;
  return mainNaruto;
}