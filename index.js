let showBurgerMenu = () => {
	document.querySelector(".menu__list").classList.toggle("active")
}

let burger = document.querySelector(".menu__burger").addEventListener("click", showBurgerMenu)

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',

	// effect: 'flip',
	// flipEffect: {

	// 	slideShadows: true,

	// 	limitRotation: true
	// },

	effect: 'cube',
	cubeEffect: {
		// crossFade: true
		slideShadows: true,
		shadow: true,
		shadowOffset: 20,
		shadowScale: 0.94
		// limitRotation: true
	},


	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	autoplay: {
		delay: 3000,
		stopOnLastSlide: true,
		disableOnInteraction: false
	},

	speed: 1000,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	autoHeight: true,
});

