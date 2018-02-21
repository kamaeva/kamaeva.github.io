$(function(){
	$(".collapse").on('show.bs.collapse', function(){
		$(this).prev().find(".fa").removeClass().addClass("fa fa-minus-circle");
		//$(".collapse-link").css("font-weight","400").css("text-decoration","none");
	});
	
	$(".collapse-link").on('show.bs.collapse', function(){
		$(this).css("font-weight","400").css("text-decoration","none");
	});

	$(".collapse").on('hide.bs.collapse', function(){
		$(this).prev().find(".fa").removeClass().addClass("fa fa-plus-circle");
		$(".collapse-link").css("font-weight","700");
	});

	$('#myForm').validator({
		feedback: {
		  success: 'fa fa-check-circle',
		  error: 'fa fa-times-circle'
		}
	});
	$('.form-sel').select2({
		minimumResultsForSearch: Infinity
	})

	new WOW({
		offset: 100
	}).init();
})


