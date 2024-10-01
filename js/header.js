// Carrega o conteúdo do header de outro arquivo
fetch("../support/header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("header").innerHTML = data; // Insere o conteúdo do header

    // Após o carregamento do header, anexe o evento de clique ao menu
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector("ul.menu");

    if (menuToggle && menu) {
      menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active"); // Exibe ou esconde o menu
      });
    }
  })
  .catch((error) => console.error("Erro ao carregar o header:", error));
