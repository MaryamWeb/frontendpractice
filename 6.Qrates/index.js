$(document).ready(function() {
	$('.nav-top-sm button').on('click', function() {
		$('.nav-bottom-sm')[0].style.display = 'block';
	});
	$('.toggle-button').on('click', function() {
		$('.nav-toggled-menue').toggleClass('nav-sm-content-show');
	});

	let content = document.getElementsByClassName('accordion');

	for (let c of content) {
		c.addEventListener('click', function() {
			this.classList.toggle('active');
			let panel = this.nextElementSibling;
			panel.style.display === 'block' ? (panel.style.display = 'none') : (panel.style.display = 'block');
		});
	}
});
