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

	let chkContent = document.querySelector('.names-container-right-content p');
	let chkName = document.querySelector('.names-container-left-names h3');
	let message =
		'Déplacé Maison is a convincer for anticipation. The urban trekking as nevers seen before. An exceptional product that has no equal alongside a great team represent the brand professionally. &nbsp; ';
	let message2 =
		'Good things come to those who wait – Déplacé Maison is what has been missing in the modern fashion industry for years. Buy a shoe of high quality and design it finally happened. &nbsp;';
	let author = 'William Gibson';
	let author2 = 'Jamie K. Cohen';

	const changeContext = (chk, txt1, txt2) => {
		$(chk).addClass('collapsed');
		if (chk.textContent == txt1) {
			setTimeout(function() {
				$(chk).removeClass('collapsed');
				$(chk).text(txt2);
			}, 3000);
		} else {
			setTimeout(function() {
				$(chk).removeClass('collapsed');
				$(chk).text(txt1);
			}, 3000);
		}
	};
	changeContext(chkContent, message, message2);
	changeContext(chkName, author, author2);
	setInterval(function() {
		changeContext(chkContent, message, message2);
	}, 6000);
	setInterval(function() {
		changeContext(chkName, author, author2);
	}, 6000);
});
