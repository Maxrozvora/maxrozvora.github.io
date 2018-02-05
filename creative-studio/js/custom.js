$(function(){
	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.banner-slider, .testimonial_slider').slick({
		arrows:false,
		dots: true

	})
	$('.portfolio-slider').slick({
		dots:true,
		appendArrows: '.portfolio-slider__buttons',
		nextArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
		prevArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
	})
});

   


