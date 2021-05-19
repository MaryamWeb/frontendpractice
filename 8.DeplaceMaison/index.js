$(document).ready(function() {
	let shoeSlide = document.querySelector('.shoes-slide');
	let innerSlider = document.querySelector('.shoes-slide-inner');

	let pressed = false;
	let startx;
	let x;

	shoeSlide.addEventListener('mousedown', (e) => {
		pressed = true;
		startx = e.offsetX - innerSlider.offsetLeft;
		shoeSlide.style.cursor = 'grabbing';
	});
	shoeSlide.addEventListener('mouseenter', () => {
		shoeSlide.style.cursor = 'grab';
	});
	shoeSlide.addEventListener('mouseup', () => {
		shoeSlide.style.cursor = 'grab';
	});
	window.addEventListener('mouseup', () => {
		pressed = false;
	});
	shoeSlide.addEventListener('mousemove', (e) => {
		if (!pressed) return;
		e.preventDefault();
		x = e.offsetX;
		innerSlider.style.left = `${x - startx}px`;
		checkBoundary();
	});

	function checkBoundary() {
		let outer = shoeSlide.getBoundingClientRect();
		let inner = innerSlider.getBoundingClientRect();
		if (parseInt(innerSlider.style.left) > 0) {
			innerSlider.style.left = '0px';
		} else if (inner.right < outer.right) {
			innerSlider.style.left = `-${inner.width - outer.width}px`;
		}
	}
});
