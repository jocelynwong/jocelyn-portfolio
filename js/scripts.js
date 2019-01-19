$(document).ready(function(){ 
	// mobile hamburger menu
	$('.hamburger').click(function() {
		$(this).toggleClass('clicked');
		$('body').toggleClass('menu-active');
		$('.menu-wrap').toggleClass('menu-show');
	});
});

// smoothState
$(function(){
	'use strict';
	var $page = $('#main'),
			options = {
				debug: true,
				prefetch: true,
				cacheLength: 2,
				forms: 'form',
				onStart: {
				duration: 300, // Duration of our animation
				render: function ($container) {
					// Add your CSS animation reversing class
					$container.addClass('is-exiting');
					// Restart your animation
					smoothState.restartCSSAnimations();
				}
			},
			onReady: {
				duration: 0,
				render: function ($container, $newContent) {
				// Remove your CSS animation reversing class
					$container.removeClass('is-exiting');
					// Inject the new content
					$container.html($newContent);
				}
			}
		},
		smoothState = $page.smoothState(options).data('smoothState');
});