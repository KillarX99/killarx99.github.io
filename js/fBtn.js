document.addEventListener("DOMContentLoaded", function () {
    const floatingBtn = document.getElementById("floatingBtn");

    window.addEventListener("scroll", function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            floatingBtn.classList.add("active");
        } else {
            floatingBtn.classList.remove("active");
        }
    });

    floatingBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // Para navegadores que no sean Firefox
        document.documentElement.scrollTop = 0; // Para Firefox
    });
});
