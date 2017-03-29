function cycleImages(){
      var $active = $('#birthday__background-imgs .active');
      var $next = ($('#birthday__background-imgs .active').next().length > 0) ? $('#birthday__background-imgs .active').next() : $('#birthday__background-imgs div:first');
      $next.css('z-index',2);//move the next image up the pile
	  $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
      $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

    $(window).load(function(){
		$('#birthday__background-imgs').fadeIn(1500);
		  // run every 5s
		  setInterval('cycleImages()', 5000);
    })