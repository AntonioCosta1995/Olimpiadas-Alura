function pesquisar() {
    // Obter a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value;

// se campoPesquisa for uma string sem nada
if (!campoPesquisa) {
  section.innerHTML = "<p>Nada a ser mostrado. Voce precisa digitar algo sobre algum atleta ou esporte</p>"
return
}

campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializar uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Iterar sobre cada dado na lista de dados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao = dado.descricao.toLowerCase()
      tags = dado.tags.toLowerCase()
      // Se titulo includes campoPesquisa
      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        console.log(dado.titulo.includes(campoPesquisa));
        {
        resultados += `
        <div class="item-resultado">
          <h2>
              <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais infos</a>
        </div>
      `;
        }
      }
    if (!resultados) {
        resultados = "<p>Nada a ser mostrado.</p>"
    }

    // Atribuir os resultados gerados à seção HTML
    section.innerHTML = resultados;
      
  }      
}