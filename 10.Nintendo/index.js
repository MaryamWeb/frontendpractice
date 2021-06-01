$(document).ready(function() {
	let content = document.getElementsByClassName('accordion');

	for (let c of content) {
		c.addEventListener('click', function() {
			this.classList.toggle('active');
			let panel = this.nextElementSibling;
			let arrow = $(this).children('i')[0];
			if (panel.style.display === 'block') {
				panel.style.display = 'none';
				$(arrow).removeClass('fa-chevron-up');
				$(arrow).addClass('fa-chevron-down');
			} else {
				panel.style.display = 'block';
				$(arrow).removeClass('fa-chevron-down');
				$(arrow).addClass('fa-chevron-up');
			}
		});
	}
});
