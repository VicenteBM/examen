function cuandoPaginaCarga(){
	var numeroVisitas = localStorage.getItem("numeroVisitas"); // Recuperar visitas del navegador
	numeroVisitas++; // Incrementar numeroVisitas en 1
	document.getElementById("contadorEntradas").innerText = "Número de visitas: " + numeroVisitas; // Cambiar texto interior del p
	localStorage.setItem("numeroVisitas", numeroVisitas); // Guardar valor de numeroVisitas en navegador
}

$(function () {
	'use strict';
	$('[type="submit"]').on('click', function (e) {
	  if ($(this).hasClass('cant-submit')) {
		e.preventDefault();
		$(this).animate({
		  bottom: 15
		}, 1000, function () {
		  $('form').addClass('appear').delay(800);
		  $('h1, [type="text"], [type="password"]').fadeIn(300, function () {
			$('[type="text"]').attr('placeholder', 'Type Your Username!');
		  });
		  $(this).removeClass('cant-submit').val('Login');
		});
	  }
	});
  });