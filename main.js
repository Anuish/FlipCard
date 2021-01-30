const card = document.querySelector('.card__inner');
card.addEventListener('click', function(){
	card.classList.toggle('is-flipped');
	myFunction();
});
function myFunction(){
	const x = document.querySelector('.card__face--front');
	const y = document.querySelector('.card__face--back');
	if(x.style.display == none){

		y.style.display = block;
	}
	else{
		x.style.display = block;
	}

}