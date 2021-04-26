$(document).ready(function() {
	automaticSlideshow();
	$('.workflow-link').click(function() {
		$('.workflows-dropdown').toggleClass('workflows-dropdown-show ');
		$('.workflows-dropdown').toggleClass('hide');
	});
	$('.logo-bars').on('click', function() {
		$('.navbar-container nav ul').slideToggle(300).addClass('show-ul');
		console.log('df');
	});
});
let timer;
let slideIndex = 1;
let automaticSlideIndex = 0;

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
	for (dot of dots) dot.className = dot.className.replace('active', '');

	slides[i - 1].style.display = 'block';
	dots[i - 1].className += ' active';
};

const showSlides = (x) => {
	clearTimeout(timer);
	if (x > slides.length) slideIndex = 1; //reset Next to first
	if (x < 1) slideIndex = slides.length; //reset Prev to last

	setCSS(slideIndex);
	automaticSlideIndex = slideIndex;
	timer = setTimeout(automaticSlideshow, 3000);
};

const automaticSlideshow = () => {
	automaticSlideIndex++;
	if (automaticSlideIndex > slides.length) automaticSlideIndex = 1;
	slideIndex = automaticSlideIndex;
	setCSS(automaticSlideIndex);
	timer = setTimeout(automaticSlideshow, 3000);
};
