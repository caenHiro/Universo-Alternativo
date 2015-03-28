
// ready  Solo se ejecuta cuando el DOM este listo
$(document).ready(function(){

	$("img:last-child").hide(10000);

	// eventos de mouse
	// click, bdclick,mouseenter, mouseleave,
	// eventos teclado
	// keypress, keydown, keyup
	// Funciones: toogle
	// Encademaniemto de funciones
	$("header").click(function(){
		$(this).fadeOut(1000, function(){
			console.log("Me has dado click!");
		});
	}); //accion
});