$( document ).ready(function() {
    console.log( "Pagina perfil" );
    init();
});
function init()
{
    var nombreDelUsuario = sessionStorage.getItem("NombreUsuario");
    $(".nombreUsuario").html(nombreDelUsuario);
}