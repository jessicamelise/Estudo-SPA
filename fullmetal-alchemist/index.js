export const fullmetalAlchemist = () => {
  const mainFullmetal = document.createElement("section");
  const text = `
    <h1>Fullmetal Alchemist: Brotherhood</h1>
    <h3>
      É um anime série adaptado do Fullmetal Alchemist manga por Hiromu Arakawa.
    </h3>
    <p>
      Ao contrário da adaptação anterior, Brotherhood é um quase 1: 1 adaptação 
      seguinte diretamente os eventos originais do mangá.
    </p>
    <p>
      Os irmãos Edward e Alphonse Elric são criados por sua mãe Trisha Elric na remota 
      aldeia de Resembool no país de Amestris . Seu pai Hohenheim, um famoso alquimista 
      e muito talentoso, abandonou a família enquanto os meninos ainda eram jovens, 
      e ao mesmo tempo sob os cuidados de Trisha eles começaram a mostrar uma afinidade 
      para alquimia. No entanto, quando Trisha morreu de uma doença prolongada, eles 
      foram tratados por sua melhor amiga Winry Rockbell e sua avó Pinako.
    </p>
    <p>
      Essas informações foram retiradas do site
      <a href="https://pt.qwe.wiki/wiki/Fullmetal_Alchemist:_Brotherhood">Wiki</a>, 
      acesse para ver o artigo completo.
    </p>
  `;

  mainFullmetal.innerHTML = text;

  return mainFullmetal;
}