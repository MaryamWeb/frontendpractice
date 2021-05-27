$(document).ready(function() {
	$('#work-hover').hover(function() {
		$('.wrapper').toggleClass('blur-wrapper');
	});
	$('#lets-talk-hover').hover(function() {
		$('.wrapper').toggleClass('blur-wrapper');
	});
	$('.change-images-img').mouseover(function() {
		$(this).css({ width: '98%', height: '48vw' });
	});
	$('.change-images-img').mouseout(function() {
		$(this).css({ width: '100%', height: '50vw' });
	});
	$('.footer-lg').mouseover(function() {
		$('.footer-bg-img').css('height', '60px');
	});
	$('.footer-lg').mouseout(function() {
		$('.footer-bg-img').css('height', '50px');
	});
});

let timer;

const images = [
	"url('./images/bg1.jpg')",
	"url('./images/bg2.jpg')",
	"url('./images/bg3.jpg')",
	"url('./images/bg4.jpg')",
	"url('./images/bg5.jpg')",
	"url('./images/bg6.jpg')",
	"url('./images/bg7.jpg')",
	"url('./images/bg8.jpg')",
	"url('./images/bg9.jpg')",
	"url('./images/bg10.jpg')",
	"url('./images/bg11.jpg')",
	"url('./images/bg12.jpg')"
];
const slider = document.getElementById('#slider');
const img = document.getElementsByClassName('change-images-img');
let i = 0;

const automaticSlideshow = () => {
	img[0].style.backgroundImage = images[i];
	i == 5 ? (i = 0) : i++;
};

let startTime = new Date().getTime();
window.onload = function() {
	setInterval(automaticSlideshow, 250);
};
