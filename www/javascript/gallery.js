function initNyroModal() { 

	var	$bwi = $(window).width() * .5,
		$bh = $(window).height() * .85,
		$sh = $(window).height() * .6,
		$swi = $(window).width() * .83;
		
	var bignmObj = {
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
			},
			afterHideCont: function() {
				$( 'body' ).removeClass( 'body--nyroOpen' );
				$('#nav-wrap').css('z-index','10');
			}
		}
	}
	
	if($(window).width() > 800 )
		bignyro = $('.nyroModal').nyroModal( bignmObj );	
	else
		smallnyro = $( '.nyroModal' ).nyroModal( smallnmObj )
	
};




$( document ).ready( function() {
    initNyroModal();
});
