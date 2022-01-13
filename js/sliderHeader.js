// SLIDER-HEADER
	// START
	
	const 	slides = document.querySelectorAll('.slide_header'),
			dots = document.querySelectorAll('.dot');

	let index = 0;
	
	const header_active_slide = n => {
		for(slide of slides) {
			slide.classList.remove('active_slide_header');
		}
		slides[n].classList.add('active_slide_header');
	}
	
	const header_active_dot = n => {
		for(dot of dots) {
			dot.classList.remove('active_dot');
		}
		dots[n].classList.add('active_dot');
	}

	const prepareCurrentSlide = ind => {
		header_active_slide(ind);
		header_active_dot(ind);
	}

	dots.forEach((item, indexDot) => {
		item.addEventListener('click', () => {
			index = indexDot;
			prepareCurrentSlide(index);
		})
	});

// END
	// ---------------------------------
	
	