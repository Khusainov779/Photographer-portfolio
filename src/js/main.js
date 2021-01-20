import './vendor';
import './helpers';
import 'vegas';

$('.home-hero').vegas({
	transition: 'fade',
	transitionDuration: 2000,
	delay: 5000,
	animation: 'random',
	animationDuration: 5000,
	timer: false,
	slides: [
		{src: '../images/face-1.jpg'},
		{src: '../images/face-2.jpg'},
		{src: '../images/face-3.jpg'},
		{src: '../images/face-4.jpg'},
		{src: '../images/face-5.jpg'},
		{src: '../images/face-6.jpg'},
		{src: '../images/face-7.jpg'},
		{src: '../images/face-8.jpg'},
		{src: '../images/face-9.jpg'},
		{src: '../images/face-10.jpg'},
	],
});
