"use strict";

var app = {
	init: function () {
		//in here are calls for all the init functions for the different modules of the app object
		app.video.init();
		app.grid.init();
		app.widthHeight.init();
		app.fullHeight.init();
		app.burger.init();
		app.scroll.init();
		app.instagram.init();
	}
};

// document ready method
$(document).on('ready', app.init);