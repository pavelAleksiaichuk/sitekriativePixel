
	// HEADER-BURGER & SHOW / HIDE OLW (Our Latest Works)
	// START
	$(document).ready(function() {
		$('.header_burger').click(function(event) {
			$('.header_burger, .nav_menu').toggleClass('active_menu');
		});
		$('.show_more_olw').click(function(event) {
			$('.slider_gallery_wrapper, .arrows').toggleClass('active_olw');
		});
		$('.show_recent_posts').click(function(event) {
			$('.content_posts').toggleClass('active_recent_posts');
		});
		$('.show_location').click(function(event) {
			$('.location, .contact_us_form').toggleClass('active_location');
		});
	});
	// END
	// --------------------------------


	// GOOGLE MAP
	// START
	function initMap() {
		// The location of Uluru
		const uluru = { lat: 40.7423954, lng: -73.9914075 };
		// The map, centered at Uluru
		const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: uluru,
		});
		// The marker, positioned at Uluru
		const marker = new google.maps.Marker({
		position: uluru,
		map: map,
		});
	}

	// END
	// ---------------------------------


	// Button toTop
	// START
	$(function() {
		$(window).scroll(function() {
			if($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0}, 500);
		});
	});
		

	// END
	// ---------------------------------


	// CLOSE CONTACT US
	// START
	var acc = document.getElementsByClassName("btn_open_close");
	var i;

	for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var panel = this.nextElementSibling;
		if (panel.style.display === "block") {
		panel.style.display = "none";
		} else {
		panel.style.display = "block";
		}
	});
	}

	//END
	// ---------------------------------