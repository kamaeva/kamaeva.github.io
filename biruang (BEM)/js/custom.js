$(function(){
			$(".slider").unslider({
				arrows: false,
				autoplay: true
			});
	$(".hamburger").click(function() {
			if(this.classList.contains('off')) {
				$(".tabs").fadeToggle();
				$(this).removeClass('off').addClass('on');
			}else{
				$(".tabs").css('display', 'none');
				$(this).removeClass('on').addClass('off');
			}

	});
});