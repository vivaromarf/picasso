$(document).ready(function() {
		$('#rumble-credit').hide(0).fadeIn(500);
		$('.borboletas').hide(0).fadeIn(500);
      // $('navbar').hide(0);

		setTimeout(function(){
			$('#rumble-credit').fadeOut(1500);
			$('.borboletas').fadeOut(1500);
		}, 1500);

		// setTimeout(function(){
		// 	$('#project-title').show();
		// 	$('#artist-name').show();
		// 	$('#bars').show();
		// }, 3500);
    //
    //
		// $( "#skip" ).click(function() {
		// 	$('#project-title').hide();
		// 	$('#bars').hide();
		// 	$('#artist-name').hide();

		setTimeout(function(){
			$('body').removeClass("noscroll");
			$('body').addClass('loaded');
      $('#mainNav').removeClass('none');
		}, 4000);
	
//		setTimeout(function() {
//			var s = document.createElement("script");
//			s.type = "text/javascript";
//			s.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eeed4279d4dd544"; 
//			$("body").append(s);
//		}, 4600);


 });
