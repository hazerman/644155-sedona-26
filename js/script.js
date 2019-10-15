var popup = document.querySelector('.popup-find-hotel');
var link = document.querySelector('.find-hotel-btn');

link.addEventListener('click', function(evt) {
	evt.preventDefault();
	popup.classList.toggle('show-popup');
})
