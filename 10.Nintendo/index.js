$(document).ready(function() {
	checkWidth();
	$(window).resize(checkWidth);
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
	$('.show-strikes').mouseover(function() {
		$(this).find('.sparks').css('opacity', 1);
	});
	$('.show-strikes').mouseout(function() {
		$(this).find('.sparks').css('opacity', 0);
	});
});

let slideIndex = 1;

const changeSlideArrow = (x) => {
	showSlides((slideIndex += x));
};
const changeSlideDot = (x) => {
	showSlides((slideIndex = x));
};

let slides = document.getElementsByClassName('slide');
let dots = document.getElementsByClassName('slide-dot');

const setCSS = (i) => {
	for (slide of slides) slide.style.display = 'none';
	for (slide of slides) slide.className = slide.className.replace('activeslide', '');
	slides[i - 1].style.display = 'grid';
	slides[i - 1].className += ' activeslide';

	for (dot of dots) dot.className = dot.className.replace('active', '');
	dots[i - 1].className += ' active';
};

const showSlides = (x) => {
	if (x > slides.length) slideIndex = 1; //reset Next to first
	if (x < 1) slideIndex = slides.length; //reset Prev to last
	setCSS(slideIndex);
};
function checkWidth() {
	$(window).width() < 981
		? $('input').attr('placeholder', 'Search')
		: $('input').attr('placeholder', 'Search games, systems, support, etc');

	if ($(window).width() > 769) {
		closeSideNav();
	}
}
function openCloseSideNav() {
	$('.nav-side').toggleClass('is-active');
	$('.nav-container-sm').toggleClass('fixed-top');
	if ($('#open-close-icon').hasClass('fa-bars')) {
		$('.overlay').css({ opacity: '0.8', 'pointer-events': 'auto' });
		$('#open-close-icon').addClass('fa-times').removeClass('fa-bars');
	} else {
		$('.overlay').css({ opacity: '0', 'pointer-events': 'none' });
		$('#open-close-icon').addClass('fa-bars').removeClass('fa-times');
	}
}
function closeSideNav() {
	$('.nav-side').removeClass('is-active');
	$('.nav-container-sm').removeClass('fixed-top');
	$('.overlay').css({ opacity: '0', 'pointer-events': 'none' });
	$('#open-close-icon').addClass('fa-bars').removeClass('fa-times');
}
