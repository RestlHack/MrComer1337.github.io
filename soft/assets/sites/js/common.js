$(function() {

 var $menu = $(".default");

  $(window).scroll(function(){

    if ( $(this).scrollTop() > 100 && $menu.hasClass("default") ){
      $menu.removeClass("default").addClass("fixed");

    } else if($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {

      $menu.removeClass("fixed").addClass("default");

    }

});//scroll
    
$(".menu li").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
    

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};


	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(document).ready(function(){
    
     $(".scrol_icon").click(function() {
        $("html, body").animate({ scrollTop: $(".main-head").height()+120 }, "slow");
        return false;
    });


	$('.single-item').slick({
		 dots: true,
		 autoplay: true,
         autoplaySpeed: 5000
	});

	$('.slider_reviews').slick({
		 dots: true,
		 infinite: true,
		 autoplay: false,
     autoplaySpeed: 5000
	});



});

$(document).ready(function(){
    jQuery.fn.SetProgressBar = function (aOptions) {
        var aDefOpts = {
        	  sizeer: 30
        }
        var aOpts = jQuery.extend(aDefOpts, aOptions);
        var vPb = this;

        return this.each(function() {
                $(vPb).css('width', aOpts.sizeer+'%');
            }
        );
    }


    jQuery.fn.anim_progressbar = function (aOptions) {
        var aDefOpts = {
          sizeer: 30,
            interval: 100
        }
        var aOpts = jQuery.extend(aDefOpts, aOptions);
        var vPb = this;

        return this.each(function() {

                $(vPb).children('.pbar').progressbar();
                var vInterval = setInterval(function(){
                $(vPb).children('.pbar').children('.ui-progressbar-value').css('width', aOpts.sizeer+'%');
                if (aOpts.sizeer >= 100) { clearInterval(vInterval); }

                 }, aOpts.interval);

            }
        );
    }

});
