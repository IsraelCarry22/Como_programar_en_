function redireccionarPagina(elemento) {
    var url = elemento.getAttribute('data-url');
    if (url) {
        window.location.href = url;
    }
}
