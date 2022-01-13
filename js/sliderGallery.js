// SLIDER-GALLERY
	// START
	
	const 	next = document.getElementById('btn-next'),
			prev = document.getElementById('btn-prev'),
			slides_gallery = document.querySelectorAll('.slide_gallery');

	let index2 = 0;
	
	const gallery_active_slide = n => {
		for(slide_gallery of slides_gallery) {
			slide_gallery.classList.remove('active_slide_gallery');
		}
		slides_gallery[n].classList.add('active_slide_gallery');
	}

	const next_slide = () => {
		if(index2 == slides_gallery.length - 1) {
			index2 = 0;
			gallery_active_slide(index2);
		} else {
			index2++;
			gallery_active_slide(index2);
		}
	}

	const prev_slide = () => {
		if(index2 == 0) {
			index2 = slides_gallery.length - 1;
			gallery_active_slide(index2);
		} else {
			index2--;
			gallery_active_slide(index2);
		}
	}

	next.addEventListener('click', next_slide);
	prev.addEventListener('click', prev_slide);

	// END
	// ---------------------------------
	
	