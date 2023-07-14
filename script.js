$(document).ready(function(){
	
		$('.slide-area').owlCarousel({
			items: 1,
			loop:true,
			nav:true,
      });
	  
	  $('.who-are-we-menu-area ul li a').click(function(){
		  $('.who-are-we-menu-area ul li a').removeClass('active');
		  $(this).addClass('active');
		  return false;
	  });
	  $('#history').click(function(){
		  $('.who-we-are-single').hide();
		  $('.history').slideDown();
		  return false;
	  });
	  $('#mission').click(function(){
		  $('.who-we-are-single').hide();
		  $('.mission').slideDown();
		  return false;
	  });
	  $('#vision').click(function(){
		  $('.who-we-are-single').hide();
		  $('.vision').slideDown();
		  return false;
	  });
	  $('#success').click(function(){
		  $('.who-we-are-single').hide();
		  $('.success').slideDown();
		  return false;
	  });
		  $('.testimonial-cor').owlCarousel({
			  items: 2,
			  loop:true,
			  nav:true,
			  dots:false,
			  
		});
		$('.ariful').owlCarousel({
			items: 6,
			loop: true,
			nav: false,
			dots:  false,
		});
	
})