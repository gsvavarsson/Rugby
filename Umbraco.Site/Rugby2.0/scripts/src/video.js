//here we add a navigation object to the app object. The init method is then called in the apps init method
app.video = {
	init: function() {
		var scr1_scrolled = false; 
		var scr1Animating = false; 
		var windowHeight = $(window).innerHeight();

		$('.hero').css('height', windowHeight);

		$(window).scroll(function(e){
			if ($(window).width() < 767) {return;}
			var cur = $(window).scrollTop();

			if (cur >= 4 && !scr1_scrolled ){
				scr1Animating = true; 
				$('body').addClass("scrolled").scrollTop( 100 );
				setTimeout(function(){
					scr1_scrolled = true;
					scr1Animating = false;
				},600)
			}
			if (cur < 4 && scr1_scrolled){
				scr1Animating = true; 
				$('body').removeClass("scrolled");
				
				setTimeout(function(){
					scr1_scrolled = false;
					scr1Animating = false; 
				},600)
			}
		})

		$( 'html, body' ).bind( 'scroll mousedown wheel DOMMouseScroll mousewheel keyup', function ( evt ) {
			if (scr1Animating){return false;}
		} );
	},
};