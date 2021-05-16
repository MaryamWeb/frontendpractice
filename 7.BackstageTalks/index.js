$(window).scroll(function() {
	$('section').each(function() {
		if (
			$(window).scrollTop() >= $(this).offset().top + $(this).height() ||
			$(window).scrollTop() < $(this).offset().top
		) {
			if (this.id == 'issue5') $('body').removeClass('issue5-bg');
			if (this.id == 'issue4') $('body').removeClass('issue4-bg');
			if (this.id == 'issue3') $('body').removeClass('issue3-bg');
			if (this.id == 'issue2') $('body').removeClass('issue2-bg');
			if (this.id == 'issue1') $('body').removeClass('issue1-bg');
		} else {
			if (this.id == 'issue5') $('body').addClass('issue5-bg');
			if (this.id == 'issue4') $('body').addClass('issue4-bg');
			if (this.id == 'issue3') $('body').addClass('issue3-bg');
			if (this.id == 'issue2') $('body').addClass('issue2-bg');
			if (this.id == 'issue1') $('body').addClass('issue1-bg');
		}
	});
});
