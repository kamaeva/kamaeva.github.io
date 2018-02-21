$(function(){
	$('.tabs li a').click(function(){
    	$(this).parents('.tab-wrap').find('.tab-cont__wrapper').addClass('hide'); // Метод .parents() получает всех родителей элемента - не только непосредственного, но и прародителя, прапрародителя и так далее до корневого элемента (то есть до tab-wrap). 
    	$(this).parent().siblings().removeClass('active');
    	var id = $(this).attr('href');
    	$(id).removeClass('hide');
    	$(this).parent().addClass('active');
   return false;
  });
	$(".hamburger1").click(function() {
			if(this.classList.contains('off')) {
				$(".menu").fadeToggle();
				$(this).removeClass('off').addClass('on');
			}else{
				$(".menu").css('display', 'none');
				$(this).removeClass('on').addClass('off');
			}

	});
	$(".hamburger2").click(function() {
			if(this.classList.contains('off')) {
				$(".red-list").fadeToggle();
				$(this).removeClass('off').addClass('on');
			}else{
				$(".red-list").css('display', 'none');
				$(this).removeClass('on').addClass('off');
			}

	});
})
	
