const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: 'true',
	},
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-nex',
	  prevEl: '.swiper-button-pre',
	},
	centeredSlides: true,

	slidesPerView: 4,
	slidesPerGroup: 1,
	spaceBetween: 30,
	

	breakpoints: {
		320: {
			slidesPerView: 1,
			centeredSlides: true,
			
		},
		480: {
			slidesPerView: 2,
			centeredSlides: true,
			spaceBetween: 30,
		},
		992: {
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 30,
		},
		1240: {
			slidesPerView: 4,
			spaceBetween: 30,
		}
	},
	// And if we need scrollbar
	/*scrollbar: {
	  el: '.swiper-scrollbar',
	},*/
 });
 
