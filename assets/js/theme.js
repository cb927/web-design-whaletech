$(document).ready(function () {

	var hamburger = $('.hamburger')
	var navMenu = $('.nav-menu')

	hamburger.click(function () {
		hamburger.toggleClass('active')
		navMenu.toggleClass('active')
	})


	$(window).scroll(function () {
		if ($(window).scrollTop() >= 1) {
			$('header').addClass('header-sticky')
			$('.scroll-top').addClass('active')
		} else {
			$('header').removeClass('header-sticky')
			$('.scroll-top').removeClass('active')
		}
	});

	$('.nav-menu-close').click(function(){
		$('.nav-menu').removeClass('active')
		hamburger.removeClass('active')
	})

	$('.scroll-top').click(function(){
		$('html, body').animate({scrollTop: '0px'}, 300)
	})

	//carousels
	///TOP works carousel
	$('.works__carousel').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		variableWidth: true,
		// variableWidth: true,
		nextArrow: '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
		prevArrow: '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
		responsive: [
			{
				breakpoint: 1350,
				settings: {
					slidesToShow: 2,
					variableWidth: true,
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	
	///TOP service carousel
	$('.service__carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true
	});
	$('.service__carousel__nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.service__carousel',
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});
})