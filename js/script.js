// Smooth scroll

$(document).ready(function() {
    $('.link_ancre').on('click', function() {
        var page = $(this).attr('href');
        var speed = 1000;
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
        return false;
    });
});