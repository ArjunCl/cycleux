// the document ready thing is super important and you always need to have it, otherwise your code might execute before
// jquery has downloaded and is ready. everything goes inside the document ready thing.

$(document).ready(function() {

	var $container = $('#products');

	$container.isotope({ filter: '*' });

	// hide the clear button on initial page load
	$('.js-clear').hide();

	// we have bags, posters and shirts

	$('.js-filter').on('click', function() {

		// get the data-category from the link that we have just clicked and set it as a variable
		var category = $(this).attr('data-category');

		// inject the variable into our filter method
		$container.isotope({ filter: category });

		// go through all the filters and remove the selected classes
		$('.js-filter').removeClass('selected');
		// re-add the selected class to the particular filter that has just been clicked
		$(this).addClass('selected');
		// because a filter is active, we want to fade the clear button back in again
		$('.js-clear').fadeIn();

		return false;

	});

	// clear our product filter when we click on the clear buttonusing the wildcard (*) option
	$('.js-clear').on('click', function() {

		$container.isotope({ filter: '*' });

		// we remove all active classes from the filter links
		$('.js-filter').removeClass('selected');
		// we fade the clear button back out again
		$('.js-clear').fadeOut();

		return false;

	});

});
