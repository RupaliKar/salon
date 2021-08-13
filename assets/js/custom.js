$(document).ready(function(){
		/* Booking Page Tab */
		
      $(".tabs-select.tabs-select-2").addClass("tabs-select-active");
      $(".tabs-details-show-2").show().siblings().hide();
      $(".tabs-select").on("click", function() {
          var self = $(this);
          self.addClass("tabs-select-active").siblings().removeClass("tabs-select-active");
          var select = self.attr("data-tabs");
          $(".tabs-det-1[data-tabs-details="+select+"]").show().siblings().hide();
      });
   

	 /* Reservation Page Tab */
      $(".tabs-select.re-tabs-select-1").addClass("tabs-select-active");
      $(".re-tabs-details-show-1").show().siblings().hide();
      $(".tabs-select").on("click", function() {
          var self = $(this);
          self.addClass("tabs-select-active").siblings().removeClass("tabs-select-active");
          var select = self.attr("data-tabs");
          $(".tabs-det-1[data-tabs-details="+select+"]").show().siblings().hide();
      });
	  
	  
      $(".account-tabs-select.account-tabs-select-2").addClass("tabs-select-active");
      $(".tabs-details-show-2").show().siblings().hide();
      $(".account-tabs-select").on("click", function() {
          var self = $(this);
          self.addClass("tabs-select-active").siblings().removeClass("tabs-select-active");
          var select = self.attr("data-tabs");
          $(".tabs-det-1[data-tabs-details="+select+"]").show().siblings().hide();
      });
   

      
		/* Blog Page */
		$(".reply-form").hide();
		$(".comment-reply").on("click", function() {
			$(this).siblings(".reply-form").show();
		});
		$(".close-form i").on("click", function() {
			$(this).parent().parent(".reply-form").hide();
		});

	
	/* Review */
	$(".freelancer-review").on("click", function(){
        $(".modal-overlay-2").addClass("fade-in");
        $(".modal-full-content-2").addClass("modal-show");
    });
	$(".modal-header span i").on("click", function() {
        $(".main-modal-overlay, .modal-overlay-2").removeClass("fade-in");
        $(".modal-full-content, .modal-full-content-2").removeClass("modal-show");
    });
	
	
	
	$(".auth-click-1").on("click", function() {
        $(".auth-active-dropdown.drp1").toggleClass("auth-active-show");
    });

    $(".auth-click-2").on("click", function() {
        $(".auth-active-dropdown.drp2").toggleClass("auth-active-show");
    });

    $(".auth-click-3").on("click", function() {
        $(".auth-active-dropdown.drp3").toggleClass("auth-active-show");
    });
 
 
	
	/* Dashboard */
	$('#dash-modal-demo-button-1').click(function() {
		$("#dash-main-modal-1").addClass("dash-main-modal-show");
		$(".dash-main-modal-overlay-1").addClass("fadeIn");
	});

	$(".close-modal, .modal-close i").click(function(e) {
		e.preventDefault();
		$("#dash-main-modal-1").removeClass("dash-main-modal-show");
		$(".dash-main-modal-overlay-1").removeClass("fadeIn");
	});

	$('#dash-modal-demo-button-2').click(function() {
		$("#dash-main-modal-2").addClass("dash-main-modal-show");
		$(".dash-main-modal-overlay-2").addClass("fadeIn");
	});

	$(".close-modal, .modal-close i").click(function(e) {
		e.preventDefault();
		$("#dash-main-modal-2").removeClass("dash-main-modal-show");
		$(".dash-main-modal-overlay-2").removeClass("fadeIn");
	});
	
	$(".img-change").on("click",function() {    
		$(this).siblings().click();  
		return false;
	});


	
	
	/* Mobile Menu */
	 /*   $(".mobile-menu .mbl-header-menu-area").hide();
    $(".mobile-toggle").on("click", function() {
        $(".mobile-menu .mbl-header-menu-area ").slideToggle();

    });
	
	 $(".mobile_menu_close").click(function(){
        $(".mbl-header-menu-area").removeClass().addClass(".mbl-header-menu-area")  
      });
 */


$(".mbl-header-menu-area").hide();
		$(".mobile-toggle").on("click", function() {
			$(this).siblings(".mbl-header-menu-area").show();
		});
		$(".mobile_menu_close i").on("click", function() {
			$(this).parent().parent(".mbl-header-menu-area").hide();
		});





	/* DropDown */
	    $(".main-navbar li").click(function() {
        $(this).find("ul").toggleClass("dropdown-act");
    });
	

	/* Ityped */
    ityped.init(document.querySelector("#ityped"), {
        strings: ['spa.', 'hair salons.'],
        typeSpeed: 55,
          startDelay: 200,
          backSpeed: 20,
          backDelay: 1000,
          loop: true,
          cursorChar: "|",
          
      });
      ityped.init(document.querySelector("#ityped1"), {
        strings: ['spa.', 'hair salons.'],
        typeSpeed: 55,
          startDelay: 200,
          backSpeed: 20,
          backDelay: 1000,
          loop: true,
          cursorChar: "|",
          
      });



	// Header Slider 
  $('.active-slider').owlCarousel({
		loop:true,
		margin:0,
		/* autoplay:true,
		autoplayTimeout:5000, */
		dots:true,
		nav:true,
	navText:['<i class="fas fa-angle-left"></i>',
		'<i class="fas fa-angle-right"></i>'],
		animateIn: 'fadeIn',
		responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
	  
  });
  
  
 
});
/* Fixed Menu */
$(document).on('scroll', function() {
    var scrollPos = $(this).scrollTop();

    if( scrollPos > 10 ) {
        $('.header-area').addClass('navbar-home');
    }

    else {
        $('.header-area').removeClass('navbar-home');
    }
});


/*  $(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 300) {
      $('#menu').removeClass(  ).addClass( "menu_fixed" );
    } else  {
      $('.menu_fixed').removeClass(  ).addClass( "_13menu" );
    } 
    

  });

}); */
