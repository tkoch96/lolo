
//REGULAR WINDOW JS
if($(window).width() > 800) {
	$(window).load(function(){
		setTimeout(function(){
			$('#cover').remove();
		},1500);
		window.scrollTo(0,0);
	});
	$(document).ready(function(){
		//MENU SIZING
		
		var	vidratio = 1.711;
			
		//END MENU SIZING
		
		//Fix mars vid
		$('#marsvid').width($(window).width() * .6).height($('#marsvid').width() / vidratio);	
		
		//Fix news links
		$('.newslinkbox').height($(window).width() * .096);
		
		
		//Fix Contact background
		setTimeout(function() {
			var contactbackgroundratio = 1.45,
				h = $(window).width() * .9 / contactbackgroundratio
			$('#contactcont').height(h);
		},1000);
			
		$(".menu-item").hover(function() {
			var me = $(this).find('img'),
				biggerwidth = $(this).width(),
				src = me.attr("src").replace("Normal.png","Oval.png");
				
			me.stop().animate({
				width: biggerwidth,
				left: 0
			},400)
			.attr("src",src);
		},
		function() {
			var me = $(this).find('img'),
			src = me.attr("src").replace("Oval.png","Normal.png"),
			smallerwidth = $(this).width() * .8,
			shiftitleft = $(this).width() * .1;
			
			me.stop().animate({
				width: smallerwidth,
				left: shiftitleft
			},400)
			.attr("src",src);
		});
		
		//News link box hover effect
		$('.newslinkbox').hover(function() {
			var me = $(this);
			me.stop().animate({
				'opacity': '1',
				'font-size': '2.5vw'
			},500);
		}, function() {
			var me = $(this);
			me.stop().animate({
				'opacity': '.6',
				'font-size': '2.1vw'
			},500);
		});
	});

	(function($,sr){

	  // debouncing function from John Hann
	  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
	  var debounce = function (func, threshold, execAsap) {
		  var timeout;

		  return function debounced () {
			  var obj = this, args = arguments;
			  function delayed () {
				  if (!execAsap)
					  func.apply(obj, args);
				  timeout = null;
			  };

			  if (timeout)
				  clearTimeout(timeout);
			  else if (execAsap)
				  func.apply(obj, args);

			  timeout = setTimeout(delayed, threshold || 100);
		  };
	  }
	  // smartresize 
	  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

	})(jQuery,'smartresize');


	// usage:
	$(window).smartresize(function(){
	  //MENU SIZING ON RESIZE
		var vidratio = 1.711,
			imgw = $('#menu').width() * .1329999,
			imgh = $(window).data('ratio') * imgw;
			
		//Fix mars vid
		$('#marsvid').width($(window).width() * .6).height($('#marsvid').width() / vidratio);	
		
		

		//Fix news links
		$('.newslinkbox').height($(window).width() * .096);
		
		//Fix Contact background
		var contactbackgroundratio = 1.45;
		$('#contactcont').height($(window).width() * .9 / contactbackgroundratio);
		
		//Submit button, cant size correct because of differences in padding 
		$('#submitbutton').width($('textarea').width());
	});
}


//MOBILE JS
else {
	$(window).load(function(){
		setTimeout(function(){
			$('#cover').remove();
		},1500);
		window.scrollTo(0,0);
	});
	$(document).ready(function(){
		//MENU SIZING
		
		var	vidratio = 1.711,
			imgw = $('#menu').width() * .1329999,
			imgh = $(window).data('ratio') * imgw,
			logor = $('#logo-wrap img').width() / $('#logo-wrap img').height() * .68;
			
		$('.menu-item').css({
			"width": imgw + 'px',
			"height": imgh + 'px'
		});
		$('.mainbuttonimg').css({
			"height": imgh + 'px',
			"width": imgw + 'px'
		});
		
		$('#logo-wrap img').height(($('.menu-item').height()) * .68).width($('.menu-item').width() * logor );
		$(window).data('logoratio',logor);
		
		var navfix = $('.mainbuttonimg').height() * 1.6;
			
		$('#nav-wrap').height(navfix);
		
		var newtop = (navfix - $('.menu-item').height())/2,
			newleft = ($('#nav-wrap').width() - $('#menu').width())/2;
		
		$('.menu-item').css('top', newtop + 'px');
		$('#menu').css('left', newleft + 'px');
		
		//cache crap
		var	hwR = $('.menu-item').height() / $('.menu-item').width(),
			hwR2 = $('.mainbuttonimg').height() / $('.mainbuttonimg').width();
		$(window).data({
			'ratio': hwR,
			'ratio2': hwR2
		});
		//END MENU SIZING
		
		$('#submitbutton').css('font-size','8px');
	});
	
	//Fix news links
	$('.newslinkbox').height($(window).width() * .096);
}
