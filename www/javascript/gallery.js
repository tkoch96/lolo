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
			maxH: undefined,    // maximum height
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
			initH: $sh,   // Initial height
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
			},
			afterHideCont: function() {
				$( 'body' ).removeClass( 'body--nyroOpen' );
				$('#nav-wrap').css('z-index','10');
			}
		}
	}
	
	var	bignyro = $('.tallgal').nyroModal( bignmObj ),	
		smallnyro = $( '.nyroModal' ).not('.tallgal').nyroModal( smallnmObj );
	
};




$( document ).ready( function() {
    initNyroModal();
});
