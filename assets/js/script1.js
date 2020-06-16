jQuery(document).ready(function($){$(".scroll a, .navbar-brand, .gototop, #home>a").click(function(event){event.preventDefault();$('html,body').animate({scrollTop:$(this.hash).offset().top}, 600,'swing');$(".scroll li").removeClass('active');$(this).parents('li').toggleClass('active');});$('#inspire_c').mouseover(function(){$('#inspire_o').show(0);});$('#inspire_c').mouseout(function(){$('#inspire_o').hide(0);});$('#riits_c').mouseover(function(){$('#riits_o').show(0);});$('#riits_c').mouseout(function(){$('#riits_o').hide(0);});$('#riits_c_k').mouseover(function(){$('#riits_o_k').show(0);});$('#riits_c_k').mouseout(function(){$('#riits_o_k').hide(0);});$('#pc_c').mouseover(function(){$('#pc_o').show(0);});$('#pc_c').mouseout(function(){$('#pc_o').hide(0);});});var wow=new WOW({boxClass: 'wowload',animateClass: 'animated',offset: 0,mobile: true,live: true});wow.init();$('.carousel').swipe({swipeLeft: function(){$(this).carousel('next');},swipeRight: function(){$(this).carousel('prev');},allowPageScroll: 'vertical'});particlesJS("particles-js",{"particles":{"number":{"value": 80,"density":{"enable": true,"value_area": 800}},"color":{"value": "#239F85"},"shape":{"type": "circle","stroke":{"width": 0,"color": "#000000"},"polygon":{"nb_sides": 5},"image":{"src": "img/github.svg","width": 100,"height": 100}},"opacity":{"value": 0.7,"random": false,"anim":{"enable": false,"speed": 1,"opacity_min": 0.1,"sync": false}},"size":{"value": 4,"random": true,"anim":{"enable": false,"speed": 40,"size_min": 0.1,"sync": false}},"line_linked":{"enable": true,"distance": 150,"color": "#239F85","opacity": 0.5,"width": 1},"move":{"enable": true,"speed": 6,"direction": "none","random": false,"straight": false,"out_mode": "out","bounce": false,"attract":{"enable": false,"rotateX": 600,"rotateY": 1200}}},"retina_detect": true});var counterFlag=0;var counterfn=function(){if(!counterFlag){$('#counter1').countTo();setTimeout(function(){$('#counter2').countTo();}, 500);setTimeout(function(){$('#counter3').countTo();}, 1000);setTimeout(function(){$('#counter4').countTo();}, 1500);}counterFlag=1;};var waypoint=new Waypoint({element: document.getElementById('team'),handler: function(){counterfn();},offset: 'bottom-in-view'});

$('.carousel[data-type="multi"] .item').each(function() {
	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i = 0; i < 3; i++) {
		next = next.next();
		if (!next.length) {
			next = $(this).siblings(':first');
		}

		next.children(':first-child').clone().appendTo($(this));
	}
});