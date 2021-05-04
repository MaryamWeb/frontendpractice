$(document).ready(function() {
	$('.nav-top-sm button').on('click', function() {
		$('.nav-bottom-sm')[0].style.display = 'block';
	});
	$('.close-button').on('click', function() {
		$('.nav-bottom-sm')[0].style.display = 'none';
	});
});
