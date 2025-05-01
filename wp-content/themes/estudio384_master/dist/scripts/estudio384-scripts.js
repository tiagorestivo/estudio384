$(document).ready(function () {
	
	// Swiper Home Slider
	var mySwiper = new Swiper('.home-swiper', {
		autoplay: 9000,
		speed: 3000,
		effect: 'fade',
		fade: {
			crossFade: true
		},
		centeredSlides: true,
		//pagination: ".swiper-pagination",
		//paginationClickable: true
	});
	// Swiper Projects Slider
	var mySwiper = new Swiper('.project-swiper', {
		centeredSlides: true,
		//pagination: ".swiper-pagination",
		//paginationClickable: true
		nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
	});

	// Magnific Popup
	$('.popup-gallery').each(function() { // the containers for all your galleries
	    $(this).magnificPopup({
	        delegate: 'a', // the selector for gallery item
	        type: 'image',
	        gallery: {
	          enabled:true
	        }
	    });
	});
	
	$(window).load(function(){
		
		$('.grid').imagesLoaded( function() {
			
			// ISotope
			var isotope = $('.grid').isotope({
			//$('.grid').isotope({
			// options
				itemSelector: '.grid-item',
				transitionDuration: 0,
				isResizeBound: false,
				layoutMode: 'masonry',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-sizer',
					gutter: '.gutter-sizer',
					//fitWidth: true
					isFitWidth: true
				}
			});
			//$('.grid').isotope('layout');
			
			// on Resize function
		    $(window).resize(function () {
		      //var $container = $('.grid');
		      isotope.isotope('layout');
		      isotope.isotope();
		    });
			
		});
	
		var ias = $.ias({
	    	container: ".grid",
			item: ".grid-item",
			pagination: ".post-nav",
			next: ".previous a",
			delay: 1200
	   	});

	   	ias.extension(new IASTriggerExtension({
		   	offset: 2,
		   	text: '[+]'
		}));
	   	ias.extension(new IASSpinnerExtension());
	   	ias.extension(new IASNoneLeftExtension({
		   	text: '[the end]'
	   	}));
	   	
	   	ias.on('render', function(items) {
	      $(items).css({ opacity: 0 });
	    });
	   	ias.on('rendered', function(items) {
	      //loadImages();
	      //checkForFeatured();
	      //makeFontResponsive();
	      //addReadMoreLinks();
	      //fitVidInit();
	      var $newElems = $(items);
	      //$container = ".grid";
	      $newElems.imagesLoaded(function(){
	        $('.grid').isotope( 'appended', $newElems );
	      });
	      
	      $('.grid-item').hover(function(){
		$(this).find('img').stop().animate({opacity: 0}, 'slow');
		$(this).find('figcaption').stop().animate({opacity: 1}, 'slow');
	}, function(){
		$(this).find('img').stop().animate({opacity: 1}, 'slow');
		$(this).find('figcaption').stop().animate({opacity: 0}, 'slow');
	});
	
		  //$('.grid').isotope('layout');
	  	});
  	
	});
	
	$('.grid-item').hover(function(){
		$(this).find('img').stop().animate({opacity: 0}, 'slow');
		$(this).find('figcaption').stop().animate({opacity: 1}, 'slow');
	}, function(){
		$(this).find('img').stop().animate({opacity: 1}, 'slow');
		$(this).find('figcaption').stop().animate({opacity: 0}, 'slow');
	});

	var colors = ['#ffffff', '#f2f2f2', '#ffe6e6', '#ffffe6', '#e6ffff', '#dce6ee', '#eec7bc'];
	$('body.home').css({'background': '' + colors[Math.floor(Math.random() *      colors.length)]});
	
	var words = ['Há', 'uma', 'inocência', 'necessária', 'essencial', 'no', 'modo', 'como', 'os', 'designers', '–', 'mas', 'também', 'outros', 'artistas', '–', 'seguem', 'uma', 'moda', '.', 'Apresentam', 'um', 'trabalho', 'que', 'segue', 'uma', 'tendência', 'formal', 'evidente', '(', 'uma', 'certa', 'fonte', 'uma', 'certa', 'combinação', 'de', 'cores', 'um', 'certo', 'padrão', 'etc.', ')', 'mas', 'acrescentam', 'que', 'faz', 'todo', 'o', 'sentido', 'a', 'fonte', 'adequa-se', 'ao', 'tema', 'as', 'cores', 'à', 'história', 'do', 'cliente', 'o', 'padrão', 'assemelha-se', 'a', 'azulejos', 'ou', 'a', 'um', 'tapete', 'tradicional', 'etc.', 'Contudo', 'tudo', 'se', 'assemelha', 'a', 'outros', 'trabalhos', 'produzidos', 'nesse', 'mesmo', 'momento', '.', 'Faz', 'parte', 'da', 'capacidade', 'do', 'designer', 'fazer', 'parte', 'de', 'uma', 'moda', 'de', 'um', 'movimento', 'como', 'se', 'fosse', 'algo', 'essencial', 'inescapável', 'E', 'como', 'tal', 'esquecer', 'que', 'antes', 'desse', 'movimento', 'houve', 'outros', 'e', 'haverá', 'mais', 'a', 'seguir', 'É', 'uma', 'espécie', 'de', 'amnésia', 'criativa', '.'
    ];

    var getRandomWord = function () {
      return words[Math.floor(Math.random() * words.length)];
    };
	$(function() { // after page load
	  setInterval(function(){
	    $('.textbox').fadeOut(500, function(){
	      $(this).html(getRandomWord()).fadeIn(500);
	    });
	  // 5 seconds
	  }, 5000);
  });
            
});