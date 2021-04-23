$(document).ready(function() {
	$('.toggle').click(function() {
		$('.topnav').toggleClass('sidenav');
	});
	$('.footer-top-sm').on('click', function() {
		$(this).siblings('ul').slideToggle(300).addClass('footer-row-content');
	});
});
