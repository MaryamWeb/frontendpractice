$(document).ready(function() {
	setInterval(stickerOpacity, 2000);
	$('.toggle-button').on('click', function() {
		$('.nav-toggled-menue').toggleClass('nav-sm-content-show');
		$('.overlay-off').toggleClass('overlay');
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
const clickHandler = (evt, option) => {
	let tabContent, tabLinks;

	tabContent = document.getElementsByClassName('tab-content');
	for (let tab of tabContent) tab.style.display = 'none';

	tabLinks = document.getElementsByClassName('tab-link');
	for (let tab of tabLinks) tab.className = tab.className.replace(' active', '');

	document.getElementById(option).style.display = 'block';
	evt.currentTarget.className += ' active';

	let setImg = document.getElementsByClassName('artists-on-qrates-right-img')[0];
	let setBgColor = document.getElementsByClassName('artists-on-qrates-container')[0];

	if (option == 'slide-1') {
		setImg.style.backgroundImage = "url('./images/artist.jpg')";
		setBgColor.style.backgroundColor = '#fff804';
	} else {
		setImg.style.backgroundImage = "url('./images/artist2.jpg')";
		setBgColor.style.backgroundColor = '#ff6711';
	}
};

let timer;

const images = [
	"url('./images/slider1.png')",
	"url('./images/slider2.png')",
	"url('./images/slider3.png')",
	"url('./images/slider4.png')",
	"url('./images/slider5.png')",
	"url('./images/slider6.png')"
];
const slider = document.getElementById('#slider');
const img = document.getElementsByClassName('make-it-real-img');
let i = 0;

const automaticSlideshow = () => {
	img[0].style.backgroundImage = images[i];
	i == 5 ? (i = 0) : i++;
};

let startTime = new Date().getTime();
window.onload = function() {
	let interval = setInterval(function() {
		if (new Date().getTime() - startTime > 60000 * 5) {
			//Stop after 5 minutes
			clearInterval(interval);
			return;
		}
		automaticSlideshow();
	}, 1000);
};

let spark = document.getElementsByClassName('sparkle-sticker');
let money = document.getElementsByClassName('money-sticker');
const stickerOpacity = () => {
	spark[0].style.opacity == '0' ? (spark[0].style.opacity = '1') : (spark[0].style.opacity = '0');
	money[0].style.opacity == '1' ? (money[0].style.opacity = '0') : (money[0].style.opacity = '1');
};
