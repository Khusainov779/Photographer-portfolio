/* eslint-disable func-names */
import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');

$(document).ready(() => {
	$(window).scroll(() => {
		if ($(document).scrollTop() > 200) {
			$('.about__aside').addClass('about__aside--is-visible');
			$('.about__section').addClass('about__section--is-visible');
		} else {
			$('.about__aside').removeClass('about__aside--is-visible');
			$('.about__section').removeClass('about__section--is-visible');
		}
	});
});

$(document).ready(() => {
	$(window).scroll(() => {
		if ($(document).scrollTop() > 900) {
			$('.home-portfolio__list--item').addClass('portfolio__list--is-visible');
		} else {
			$('.home-portfolio__list--item').removeClass('portfolio__list--is-visible');
		}
	});
});

const panels = document.querySelectorAll('.portfolio-hero__list--item');

function checkIt() {
	this.classList.toggle('open');
}
function checkEnd(e) {
	if (e.propertyName.includes('flex')) {
		this.classList.toggle('open-active');
	}
}

panels.forEach((panel) => panel.addEventListener('click', checkIt));
panels.forEach((panel) => panel.addEventListener('transitionend', checkEnd));

