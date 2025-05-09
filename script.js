function abrirPagina(pagina) {
    window.location.href = pagina;
  }
  
  function filtrarCards() {
    const termo = document.getElementById("campo-pesquisa").value.toLowerCase();
    const cards = document.querySelectorAll("#area-cards .card");
  
    cards.forEach(card => {
      const titulo = card.querySelector(".card-title").textContent.toLowerCase();
      const texto = card.querySelector(".card-text").textContent.toLowerCase();
  
      if (titulo.includes(termo) || texto.includes(termo)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  }
  