document.addEventListener("DOMContentLoaded", function () {
  console.log("Portafolio cargado correctamente.");

  // Cierra el menú hamburguesa en móviles al hacer clic en un enlace
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      // Verifica si el menú está abierto usando la clase 'show' de Bootstrap
      if (navbarCollapse.classList.contains("show")) {
        // Instancia el colapso nativo de Bootstrap y lo oculta
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });
});
