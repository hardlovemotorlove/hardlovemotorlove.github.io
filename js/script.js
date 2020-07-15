// AUTOPLAY

document.getElementById('vid').play();

// Smooth scroll

$(document).ready(function() {
    $('.link_ancre').on('click', function() {
        var page = $(this).attr('href');
        var speed = 1000;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });
});


//animations

gsap.to('.loader', 2, {
	delay: 1,
	top: "-100%",
	opacity: 0,
	ease: Expo.easeInOut,
});
gsap.from('.content', {
	delay: 2.2,
	display: "none",
});

