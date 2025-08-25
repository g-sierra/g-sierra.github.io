function alerta() {
    alert("Estos links son ilustrativos");
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".link");
    links.forEach(link => {
        link.addEventListener("click", alerta);
    });
});
