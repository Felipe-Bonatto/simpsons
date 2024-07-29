const setInfSimpsons = async () => {
  const url = "https://apisimpsons.fly.dev/api/personajes?limit=680&page=1";

  // executa a url da api e aguarda (await) o retorno do servidor
  const response = await fetch(url);

  // convertendo o resultado obtido em formato json
  const dado = await response.json();

  let containerEl = document.querySelector(".container");

  dado.docs.forEach(function (dadosPerson) {
    // criando os elementos
    let divCards = document.createElement("div");
    let figure = document.createElement("figure");
    let imagem = document.createElement("img");
    let h2namePerson = document.createElement("h2");
    let divDescricao = document.createElement("div");
    let paragrafoGenero = document.createElement("p");
    let paragrafoEstado = document.createElement("p");
    let paragrafoOcupacao = document.createElement("p");

    // text
    let textGenero = document.createTextNode(`Genero: ${dadosPerson.Genero}`);
    let textEstado = document.createTextNode(`Estado: ${dadosPerson.Estado}`);
    let textOcupacao = document.createTextNode(
      `Ocupação: ${dadosPerson.Ocupacion}`
    );
    let textNamePerson = document.createTextNode(dadosPerson.Nombre);

    // adicionando as propriedades
    divCards.setAttribute("class", "cards");
    figure.classList.add("caixa_imagem");
    imagem.setAttribute("src", dadosPerson.Imagen);
    h2namePerson.setAttribute("class", "name-person");
    divDescricao.classList.add("descricao");

    // adicionando os elementos nos outros
    containerEl.appendChild(divCards);
    divCards.appendChild(figure);
    figure.appendChild(imagem);
    divCards.appendChild(h2namePerson);
    divCards.appendChild(divDescricao);
    h2namePerson.appendChild(textNamePerson);
    divDescricao.appendChild(paragrafoGenero);
    paragrafoGenero.appendChild(textGenero);
    divDescricao.appendChild(paragrafoEstado);
    paragrafoEstado.appendChild(textEstado);
    divDescricao.appendChild(paragrafoOcupacao);
    paragrafoOcupacao.appendChild(textOcupacao);
  });
};

window.addEventListener("load", function () {
  setInfSimpsons();
});

const pesquisarPerson = async () => {
  const allCards = document.querySelectorAll(".cards");
  const NamePerson = document.querySelectorAll(".name-person");
  let inputPesquisa = document
    .getElementById("input-pesquisar")
    .value.trim()
    .toLowerCase();

  for (let i = 0; i < allCards.length; i++) {
    if (!NamePerson[i].innerHTML.toLowerCase().trim().includes(inputPesquisa)) {
      allCards[i].classList.add("none");
    } else {
      allCards[i].classList.remove("none");
    }
  }
};

const inputPesquisa = document.getElementById("input-pesquisar");
inputPesquisa.addEventListener("keyup", () => {
  pesquisarPerson();
});
