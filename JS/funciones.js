jQuery(document).ready(listo);//se empieza con $ y document es una representacion de la web y ready para decirle que vamos a empezar


function listo(){

  jQuey(".hamb").click(function(e){
  
  e.preventDefault();//esta funcion es para que deje de funcionar la accion por defecto
  jQuey("header .container nav").toggleClass("open");//el toggle lo que hace es que si tiene una clase la agrega de lo contrario lo quita

}); //cuando de clik pasara algo en el menu de la hmburguesa

}




function listo()
{
	jQuery(".hamb").click(function(e){
		e.preventDefault();
		jQuery("header .container nav").toggleClass("open");
		jQuery(".hamb i").toggleClass("fa-times");

	});

	jQuery("header .container nav a").click(function(){

		jQuery("header .container nav").removeClass("open");
		jQuery(".hamb i").removeClass("fa-times");

		var dev = jQuery(this).attr("href");

		jQuery("html,body").animate({
			"scrollTop": jQuery(dev).offset().top - 76
		})
	})
}
