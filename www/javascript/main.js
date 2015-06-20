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
	
	//Fix mars vid
	$('#marsvid').width($(window).width() * .6).height($('#marsvid').width() / vidratio);	
	
	//Fix news links
	$('.newslinkbox').height($(window).width() * .096);
		
	$(".menu-item").hover(function() {
		if(me)
			return;
		var me = $(this).find('.mainbuttonimg'),
		    src = me.attr("src").replace("Normal.png","Oval.png"),
			smallsize = {
				w: me.width() * .8,
				h: me.height() * .8
			},
			bigsize = {
				w: me.width() * 1.2,
				h: me.height() * 1.2
			},
			spec = $('.spec'),
			oldwidth = me.width(),
			oldheight = me.height(),
			oldmiw = $('.menu-item').width(),
			oldmih = $('.menu-item').height();
		$(window).data({
			'ow': oldwidth,
			'oh': oldheight,
			'omiw': oldmiw,
			'omih': oldmih
		});	
		$('.mainbuttonimg').not(me).width(smallsize.w).height(smallsize.h);
		me.width(bigsize.w).height(bigsize.h);
		$(this).css("margin-right","50px");
		me.attr("src", src);
	},
	function() {
		var me = $(this).find('.mainbuttonimg'),
		    src = me.attr("src").replace("Oval.png","Normal.png"),
			undow = $(window).data('ow'),
			undoh = $(window).data('oh'),
			undow1 = $(window).data('omiw'),
			undoh1 = $(window).data('omih');
			
		
		$('.mainbuttonimg').width(undow).height(undoh);	
		$('.menu-item').width(undow1).height(undoh1);
		$(this).css("margin-right","5px");
		$('#nav-wrap').css('margin-bottom','0px');
		
		me.attr("src", src);
		
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
		
	$('#marsvid').height($('#marsvid').width() / vidratio);	
	$('.menu-item').css({
		"width": imgw + 'px',
		"height": imgh + 'px'
	});
	$('.mainbuttonimg').css({
		"height": imgh + 'px',
		"width": imgw + 'px'
	});
	
	$('#logo-wrap img').height(($('.menu-item').height()));
	
	var navfix = $('.mainbuttonimg').height() * 1.6;
	$('#nav-wrap').height(navfix);
	
	$('#logo-wrap img').height(($('.menu-item').height()) * .68).width($('.menu-item').width() * $(window).data('logoratio'));
	
	var newtop = (navfix - $('.menu-item').height())/2,
		newleft = ($('#nav-wrap').width() - $('#menu').width())/2;
	
	$('.menu-item').css('top', newtop + 'px');
	$('#menu').css('left', newleft + 'px');
	
	//Fix news links
	$('.newslinkbox').height($(window).width() * .096);
});