$(document).ready( function() {

	// Bind event on window scroll
	$(window).scroll( function() {
		if ($(this).scrollTop() > 50) {
			$('#logo').addClass('scrolled');
			$('#mainnav').addClass('scrolled');
		}
		else {
			$('#logo').removeClass('scrolled');
			$('#mainnav').removeClass('scrolled');
		}

		// set active menu to item
		$('#mainnav li').each( function() {

			$(this).parent().addClass('active');

			var section = $(this).attr('data-menuanchor');

			if ($('#' + section).isOnScreen()) {
				// remove all active class
				$('#mainnav li').removeClass('active');
				$(this).addClass('active');
			}
		});
	});

	// Add scrolling effect when clicking the main navigation
	$('#mainnav a').smoothScroll({
		preventDefault: false,
		afterScroll: function() {
			var section = $(this).attr('data-menuanchor');

			if ($('#' + section).isOnScreen()) {
				// remove all active class
				$('#mainnav li').removeClass('active');
				$(this).addClass('active');
			}
		}
	});

});


// Detect if the element is visible on viewport
$.fn.isOnScreen = function() {
	
	var win = $(window);
	
	var viewport = {
		top : win.scrollTop()
	};
	//viewport.right = viewport.left + win.width();
	viewport.bottom = (viewport.top + win.height()) - 100;
	
	var bounds = this.offset();
	//bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = (bounds.top + this.outerHeight()) - 50;
	
	return (!(viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
