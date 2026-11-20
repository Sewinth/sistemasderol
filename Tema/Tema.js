// Aplica el tema guardado inmediatamente antes de pintar la página
if (localStorage.getItem("theme") === "light") {
  document.documentElement.setAttribute("data-theme", "light");
}

// Configura el botón una vez que carga el HTML
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-btn");
  const root = document.documentElement;

  if (!btn) return;

  // Actualiza el texto inicial del botón si está en modo claro
  if (root.getAttribute("data-theme") === "light") {
    btn.textContent = "☾ Modo Oscuro";
  }

  // Cambia el tema al hacer clic
  btn.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    if (isLight) {
      root.removeAttribute("data-theme");
      localStorage.setItem("theme", "dark");
      btn.textContent = "☀ Modo Claro";
    } else {
      root.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      btn.textContent = "☾ Modo Oscuro";
    }
  });
});
