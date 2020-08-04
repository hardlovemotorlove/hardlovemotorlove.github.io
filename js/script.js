console.clear();
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


// intro animation

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
gsap.from('#accueil .reseaux .icone_res', {
	delay: 3,
	opacity: 0,
	y: 20,
	ease: Power4.easeInOut,
	stagger: {
		each: 0.1,
	}
});
gsap.from(['#accueil h1','#accueil p','#accueil .illustration'], {
	delay: 2.2,
	opacity: 0,
	ease: Power1.easeInOut,
	stagger: .3,
});

// video parallax 

const tl = gsap.timeline();
tl.to("#accueil .illustration", 1, {y: 50})
tl.to("#accueil .illustration video", 1, {y: 100}, '<' );

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
	triggerElement: 'section#accueil',
	duration: $('section#accueil').height(),
	triggerHook: 0,
})
	.setTween(tl)
	.addTo(controller);

