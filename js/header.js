// Carrega o conteúdo do header de outro arquivo
fetch("../support/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("header").innerHTML = data; // Insere o conteúdo do header

    // Seleciona os elementos após a inserção do header
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("ul.menu");

    if (menuToggle && menu) {
      // Evento para abrir e fechar o menu
      menuToggle.addEventListener("click", (event) => {
        menu.classList.toggle("active");

        // Impede que o clique no botão feche imediatamente o menu
        event.stopPropagation();
      });

      // Evento para fechar o menu ao clicar fora dele
      document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
          menu.classList.remove("active");
        }
      });
    }
  })
  .catch((error) => console.error("Erro ao carregar o header:", error));
