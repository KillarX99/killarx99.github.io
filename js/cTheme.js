document.addEventListener("DOMContentLoaded", function() {
    const themeButton = document.getElementById("themeButton");
    const themeLink = document.getElementById("themeStylesheet");
    const themeIcon = document.querySelector("#themeButton img");

    themeButton.addEventListener("click", function() {
        // Obtiene la ruta actual del archivo de estilo
        const currentTheme = themeLink.getAttribute("href");

        // Verifica el tema actual y cambia a la otra opción
        if (currentTheme === "css/dark.css") {
            themeLink.href = "css/light.css";
            themeIcon.src = "img/moon.png";
        } else {
            themeLink.href = "css/dark.css";
            themeIcon.src = "img/sun.png";
        }
    });
});
