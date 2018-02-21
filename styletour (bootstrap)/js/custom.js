$(function(){
	$(".carousel").carousel({
		interval:5000
	});
	$('#elastislide').elastislide();

	$(window).load(function(){
		var carouselCaptionWidth=$("#small-carousel .active img").width();
		//console.log(carouselCaptionWidth);
		$("#small-carousel img").each(function(){
			$(this).attr('width',carouselCaptionWidth);
		});
		$("#small-carousel .sidebar-carousel-caption").css('max-width',carouselCaptionWidth+"px");
		$("#small-carousel .carousel-indicators").css('max-width',carouselCaptionWidth+"px");
		$(".sidebar .about").css('max-width',carouselCaptionWidth+"px");
		$(".sidebar .baner").css('max-width',carouselCaptionWidth+"px");
	});
})

				function setEqualHeight(columns) { 
					var tallestcolumn = 0; 
					columns.each( function() { 
						currentHeight = $(this).height(); 
						if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); 
						columns.height(tallestcolumn); 
				} 

					$(document).ready(function() { 
						setEqualHeight($(".products .product .product-title")); 
						setEqualHeight($(".products .product .product-desc")); 

					});

