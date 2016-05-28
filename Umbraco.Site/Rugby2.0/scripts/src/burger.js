app.burger = {
	init: function() {
		var burgerCtr = document.querySelector(".burger");
		var isAnimating = false;

		burgerCtr.addEventListener("click", function(e){
			e.preventDefault();
			isAnimating = true;
			this.classList.toggle("active");
			//$('body').toggleClass('nav-opening');
			$('body').toggleClass('nav-open');

			/*setTimeout(function(){
				$('body').addClass('nav-opening-2');
				isAnimating = false;
			}, 300)
			setTimeout(function() {
				$('body').addClass('nav-opening-3');
			}, 600)
			setTimeout(function() {
				$('body').addClass('nav-open');
			}, 900)*/
		})
	}
};