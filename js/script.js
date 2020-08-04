$(document).ready(function() {
	smoothScroll();
	loader();
});


// AUTOPLAY

document.getElementById('vid').play();

// Smooth scroll

function smoothScroll() {
	    $('.link_ancre').on('click', function() {
        let page = $(this).attr('href');
        let speed = 1000;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });
}


// intro animation

function loader() {
	let introLoader = gsap.timeline();

	introLoader.to('.loader', 2, {
		delay: .3,
		top: "-100%",
		opacity: 0,
		ease: Expo.easeInOut,
	})
	.from('.content', {
		display: "none",
	})
	.from(['#accueil h1','#accueil p','#accueil .illustration'], {
		opacity: 0,
		ease: Power1.easeInOut,
		stagger: .25,
	}, "<")
	.from('#accueil .reseaux .icone_res', {
		opacity: 0,
		y: 20,
		ease: Power4.easeInOut,
		stagger: {
			each: 0.1,
		}
	});
}


// video parallax 

let tl = gsap.timeline();
tl.to("#accueil .illustration", 1, {y: 50})
tl.to("#accueil .illustration video", 1, {y: 100}, '<' )
tl.to("#accueil h1", {y: -25}, '<')
tl.to("#accueil p", {opacity: 0}, '<');

let controller = new ScrollMagic.Controller();
let scene = new ScrollMagic.Scene({
	triggerElement: 'section#accueil',
	duration: $('section#accueil').height(),
	triggerHook: 0,
})
	.setTween(tl)
	.addTo(controller);

