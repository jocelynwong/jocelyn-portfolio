$(document).ready(function(){ 

	$('.hamburger').click(function() {
		$(this).toggleClass('clicked');
		$('body').toggleClass('menu-active');
		$('.menu-wrap').toggleClass('menu-show');
	});

});