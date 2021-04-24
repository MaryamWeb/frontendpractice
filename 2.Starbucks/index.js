$(document).ready(function() {
	$('.toggle').click(function() {
		$('.topnav').toggleClass('sidenav');
	});
	$('.footer-top-sm').on('click', function() {
		$(this).siblings('ul').slideToggle(300).addClass('footer-row-content');
	});
});
const clickHandler = (evt, option) => {
	let tabContent, tabLinks, contentAnimation;

	tabContent = document.getElementsByClassName('tab-content');
	for (let tab of tabContent) tab.style.display = 'none';

	tabLinks = document.getElementsByClassName('tab-link');
	for (let tab of tabLinks) tab.className = tab.className.replace('active', '');

	document.getElementById(option).style.display = 'block'; // Display the clicked tab and set it to active
	contentAnimation = document.getElementById(option).children;

	for (let item of contentAnimation) item.style.animation = 'fadeIn 1s';
	evt.currentTarget.className += ' active';
};
