window.addEventListener("load", function () {
    const respuesta = prompt("Escribe tu nombre de usuario:");

    if (respuesta && respuesta.trim()) {
        const nombre = respuesta.trim();
        alert(`Hola ${nombre}, bienvenido/a a mi página web`);
    } else {
        alert("Bienvenido Usuario");
    }
});

function salirPagina() {
    alert("¡Gracias por visitar mi página!");
    window.history.back();
}