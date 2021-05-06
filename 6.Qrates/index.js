$(document).ready(function() {
	$('.nav-top-sm button').on('click', function() {
		$('.nav-bottom-sm')[0].style.display = 'block';
	});
	$('.toggle-button').on('click', function() {
		$('.nav-toggled-menue').toggleClass('nav-sm-content-show');
	});
});
