function initNyroModal() { 

	var	w = $(window),
		wh = w.height(),
		ww = w.width(),
		$bwi = ww * .5,
		$bh = wh * .85,
		$sh = wh * .6,
		$swi = ww * .83,
		$bookw = ww * .8,
		$bookh = wh * .7,
	    bignmObj = {
			sizes: {
				initW: $bwi,   // Initial width
				initH: $bh,   // Initial height
				w: undefined,       // width
				h: undefined,       // height
				minW: undefined,    // minimum width
				minH: undefined,    // minimum height
				maxW: undefined,    // maximum width
				maxH: 900,    // maximum height
			}
			, callbacks: {
				afterShowCont: function() {
					$( 'body' ).addClass( 'body--nyroOpen' );
					$('#nav-wrap').css('z-index','0');
					
					//fix size of image
					var toobig = $('.nyroModalCont').not($('.nyroModalLoad')).not($('.nyroModalHidden'))[0],
						toobigwidth = $(toobig).find('img').width(),
						hasScrollBar = false;
					
					if(toobig.clientHeight < toobig.scrollHeight)
							hasScrollBar = true;
						
					while(hasScrollBar) {
						toobigwidth -= 20;
						left = ($(toobig).find('.galpopimg').width() - $(toobig).find('img').width()) / 2;
						$(toobig).find('img').width(toobigwidth).css("left", left + 'px');
						
						if(Math.abs(toobig.clientHeight - toobig.scrollHeight) < 5)
							hasScrollBar = false;
						toobigwidth = $(toobig).find('img').width();
					}

				},
				afterHideCont: function() {
					$( 'body' ).removeClass( 'body--nyroOpen' );
					$('#nav-wrap').css('z-index','10');
				}
			}
		},
		smallnmObj = {
			sizes: {
				initW: $swi,   // Initial width
				initH: 300,   // Initial height
				w: undefined,       // width
				h: 300,       // height
				minW: undefined,    // minimum width
				minH: undefined,    // minimum height
				maxW: undefined,    // maximum width
				maxH: 300,    // maximum height
			}
			, callbacks: {
				afterShowCont: function() {
					$( 'body' ).addClass( 'body--nyroOpen' );
					$('#nav-wrap').css('z-index','0');
					
				//fix size of image
				var toobig = $('.nyroModalCont').not($('.nyroModalLoad')).not($('.nyroModalHidden'))[0],
					toobigwidth = $(toobig).find('img').width(),
					hasScrollBar = false;
				
				if(toobig.clientHeight < toobig.scrollHeight)
						hasScrollBar = true;
					
				while(hasScrollBar) {
					toobigwidth -= 20;
					left = ($(toobig).find('.galpopimg').width() - $(toobig).find('img').width()) / 2;
					$(toobig).find('img').width(toobigwidth).css("left", left + 'px');
					
					if(Math.abs(toobig.clientHeight - toobig.scrollHeight) < 5)
						hasScrollBar = false;
					toobigwidth = $(toobig).find('img').width();
				}

				},
				afterHideCont: function() {
					$( 'body' ).removeClass( 'body--nyroOpen' );
					$('#nav-wrap').css('z-index','10');
				}
			}
		},
		booknmObj = {
			/*sizes: {
				initW: $bookw,   // Initial width
				initH: $bookh,   // Initial height
				w: $bookw,       // width
				h: $bookh,       // height
				minW: $bookw,    // minimum width
				minH: $bookh,    // minimum height
				maxW: $bookw,    // maximum width
				maxH: $bookh,    // maximum height
			}*/
			sizes: {
				initW: undefined,   // Initial width
				initH: undefined,   // Initial height
				w: undefined,       // width
				h: undefined,       // height
				minW: undefined,    // minimum width
				minH: undefined,    // minimum height
				maxW: undefined,    // maximum width
				maxH: undefined,    // maximum height
			}
			, callbacks: {
				afterShowCont: function() {
					$( 'body' ).addClass( 'body--nyroOpen' );
					$('#nav-wrap').css('z-index','0');
					if(!$('.nyroModalCont').find('.bookleftpage').find('.bookmaintext').hasClass('titleleftpage')) {
						_elm = [],
						_elm[0] = $('.nyroModalCont').find('.bookleftpage').find('.bookmaintext')[0],
						_elm[1] = $('.nyroModalCont').find('.bookrightpage').find('.bookmaintext')[0];	
						for(i = 0;i< 2; i++) {
							_hasScrollBar = false; 
							if (_elm[i].clientHeight < _elm[i].scrollHeight)
							_hasScrollBar = true;
							while(_hasScrollBar) {
								curr = $(_elm[i]).css('font-size');
								curr = curr.slice(0,curr.length-2);
								curr --;
								$(_elm[i]).css('font-size', curr + 'px');
				
								if (Math.abs(_elm[i].clientHeight - _elm[i].scrollHeight) < 5)
									_hasScrollBar = false;
							}
						}
					}
					else if($('.nyroModalCont').find('.bookleftpage').find('.bookmaintext').hasClass('titleleftpage')) {
						var text = $('.nyroModalCont').find('.bookmaintext')[0],
							_hasScrollBar = false; 
						if (text.clientHeight < text.scrollHeight)
							_hasScrollBar = true;
						
						while(_hasScrollBar) {
							titletext = $(text).find('.titlelefttitle').css('font-size');
							titletext = titletext.slice(0, titletext.length-2);
							titletext --;
							$(text).find('.titlelefttitle').css('font-size', titletext + 'px');
							
							titletext = $(text).find('.titleleftauthor').css('font-size');
							titletext = titletext.slice(0, titletext.length-2);
							titletext --;
							$(text).find('.titleleftauthor').css('font-size', titletext + 'px');
							
							if (Math.abs(text.clientHeight - text.scrollHeight) < 5)
								_hasScrollBar = false;
						}
					}	
				},
				afterHideCont: function() {
					$( 'body' ).removeClass( 'body--nyroOpen' );
					$('#nav-wrap').css('z-index','10');
				}
			}
		}
			
	
	if(!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) 
		bignyro = $('.nyroModal').nyroModal( bignmObj );	
	else
		smallnyro = $( '.nyroModal' ).nyroModal( smallnmObj );
	
	$('.booknyro').nyroModal( booknmObj );
	$('.vegetarianismnyro').nyroModal(booknmObj);
	$('.orchardnyro').nyroModal(booknmObj);
	$('.moonwallnyro').nyroModal(booknmObj);
	$('.arcturusnyro').nyroModal(booknmObj);
};




$( document ).ready( function() {
   setTimeout(function() {
	   initNyroModal();
   },400);
   
   $(window).resize(function() {
	   if($('body').hasClass('body--nyroOpen') && !$('.nyroModalCont').find('.bookleftpage').find('.bookmaintext').hasClass('titleleftpage')) {
			_elm = [],
			_elm[0] = $('.nyroModalCont').find('.bookleftpage').find('.bookmaintext')[0],
			_elm[1] = $('.nyroModalCont').find('.bookrightpage').find('.bookmaintext')[0];	
			for(i = 0;i< 2; i++) {
				_hasScrollBar = false; 
				if (Math.abs(_elm[i].clientHeight - _elm[i].scrollHeight) > 5)
					_hasScrollBar = true;
				while(_hasScrollBar) {
					curr = $(_elm[i]).css('font-size');
					curr = curr.slice(0,curr.length-2);
					curr --;
					$(_elm[i]).css('font-size', curr + 'px');

					if (Math.abs(_elm[i].clientHeight - _elm[i].scrollHeight) < 5)
						_hasScrollBar = false;
				}
			}
	   }
	   else if($('.nyroModalCont').find('.bookleftpage').find('.bookmaintext').hasClass('titleleftpage')) {
						_elm = [],
						_elm[0] = $('.nyroModalCont').find('.bookleftpage').find('.bookmaintext')[0],
						_elm[1] = $('.nyroModalCont').find('.bookrightpage').find('.bookmaintext')[0];	
						for(i = 0;i< 2; i++) {
							_hasScrollBar = false; 
							if (_elm[i].clientHeight < _elm[i].scrollHeight)
							_hasScrollBar = true;
							while(_hasScrollBar) {
								curr = $(_elm[i]).css('font-size');
								curr = curr.slice(0,curr.length-2);
								curr --;
								$(_elm[i]).find('p').not($('.titlelefttitle')).css('font-size', curr + 'px');
								$(_elm[i]).find('p').not($('.titleleftauthor')).css('font-size', curr + 'px');
								if (Math.abs(_elm[i].clientHeight - _elm[i].scrollHeight) < 5)
									_hasScrollBar = false;
							}
						}
					}
	});
});
