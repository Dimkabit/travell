const headerBerger = document.querySelector('.icon-menu');

const headerMenu = document.querySelector('.menu__body');

const boDy = document.querySelector('body');


headerBerger.addEventListener('click', (e) => {
	e.preventDefault();
	headerBerger.classList.toggle('active');
	headerMenu.classList.toggle('active');
	boDy.classList.toggle('lock');
	
});



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("up").style.display = "block";
    } else {
        document.getElementById("up").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  
	const upBtn = document.getElementById('up');
	upBtn.scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	});
}
