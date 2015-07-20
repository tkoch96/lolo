$(document).ready(function() {
		location.hash = '#home';
		$('#home').fadeIn(500);
	
    $(".linkimg").click(function(event) {
        event.preventDefault();
		//Add the gear spinner, modify some css values
		var $cover = $("<div>", {id: "cover2"}),
			tab = 0;
		$cover.css({
			"display": "block"
		});
		$('footer').css('display','none');
		$('main').prepend($cover);
		me = $(this);
		while(!me.attr("href"))
			me = me.parent();
		$('.menu-item, .sub-menu-item').removeClass("current");
		$(this).parent().parent().addClass("current");
        var tab = me.attr("href");
		if(!tab)
			return;
        $(".container").not(tab).css("display", "none");
		
		//cache it for scope
		$(window).data('tsm',tab);
		
		setTimeout(function(){
			//remove gear spinner, put content back
			$('#cover2').remove();
			$('.mainbuttonimg').each(function(){
				src = $(this).attr("src").replace("Oval.PNG","Normal.PNG");
				$(this).attr("src", src);
				$('.sub-menu-item').css('display','none');
			});
			$(tab).fadeIn(400);
			
			//Submit button, cant size correct because of differences in padding 
			$('#submitbutton').width($('textarea').width());
			
			
			$('footer').css('display','block');
			location.hash = $(window).data('tsm');
			
			
			//book icons sizing
			if(location.hash == "#writings") {
				booktop = ($('#writingsthumbcont').height() - $('.writingsthumbbox').height()) / 2;
				$('.writingsthumbbox').css("top", booktop + 'px');
			}
			
			
			window.scrollTo(0, 0);
		},400);
    });
	
});

$(window).on("hashchange", function(e) {
	// Display proper content
	$(".container").not(location.hash).css("display", "none");
	$(location.hash).fadeIn(400);
	$(".menu-item").each(function() {
		if ($(this).find('a').attr("href") == location.hash) {
			$(this).addClass("current");
		} else {
			$(this).removeClass("current");
		}
	});
	window.scrollTo(0,0);
});