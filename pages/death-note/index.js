export const deathNote = () => {
  const mainDeathNote = document.createElement("section");
  const text = `
    <h1>Death Note</h1>
    <h3>
      É uma série de mangá escrita por Tsugumi Ohba e ilustrada 
      por Takeshi Obata.
    </h3>
    <p>
      A história centra-se em Light Yagami, um estudante do ensino médio que 
      descobre um caderno sobrenatural chamado Death Note, no qual pode matar 
      pessoas se os nomes forem escritos nele enquanto o portador visualizar 
      mentalmente o rosto de alguém que quer assassinar. A partir daí Light 
      tenta eliminar todos os criminosos e criar um mundo onde não exista o mal, 
      mas seus planos são contrariados por L, um famoso detetive particular.
    </p>
    <p>
      Essas informações foram retiradas do site
      <a href="https://pt.wikipedia.org/wiki/Death_Note">Wikipedia</a>, 
      acesse para ver o artigo completo.
    </p>
  `;

  mainDeathNote.innerHTML = text;

  return mainDeathNote;
}