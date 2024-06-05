        let mover = 250;
		let moverlimit = 2750;
		let offset = 0;
		function slidernext() {
			const sliderSwipe = document.querySelector('.quiz-line');
			offset = offset + mover;
			if(offset > moverlimit){
				offset = 0;
			}
			sliderSwipe.style.left = -offset + 'px';
		}
		function sliderprev() {
			const sliderSwipe = document.querySelector('.quiz-line');
			offset = offset - mover;
			if(offset < 0){
				offset = moverlimit;
			}
			sliderSwipe.style.left = -offset + 'px';
		}