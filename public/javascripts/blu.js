// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});


// Mail
// $(function sendMail(){
//   $.ajax({
//     url: '/mail/sendMail',
//     data: {
//         nombre: $("#name").val(),
//         email: $("#email").val(),
//         telefono: $("#phone").val(),
//         message: $("#message").val()
//     },
//     type: 'POST',
//     datatype: JSON,
//     crossDomain: false,
//     success: function(respuesta){
//       console.log(respuesta);

//     },
//     error: function(respuesta){

//     }
//   });
// });


// Plecas

// Init ScrollMagic Controller
var controller = new ScrollMagic.Controller();


var pleca_green = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '.pleca-green .pleca',
    duration: '150%'
})
        .addTo(controller)
        .setTween('.pleca-green .pleca img', {y: '-70%', ease: Linear.easeNone});

var pleca_blue = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '.pleca-blue .pleca',
    duration: '150%'
})
        .addTo(controller)
        .setTween('.pleca-blue .pleca img', {y: '-70%', ease: Linear.easeNone});

var pelca_gray = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '.pleca-gray .pleca',
    duration: '150%'
})
        .addTo(controller)
        .setTween('.pleca-gray .pleca img', {y: '-70%', ease: Linear.easeNone});

// Backgrounds sections

var features_bg = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '#features .bg-features',
    duration: '500%'
})
        .addTo(controller)
        .setTween('#features .bg-features', {y: '-70%', ease: Linear.easeNone});

var services_bg = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '#services .bg-services',
    duration: '500%'
})
        .addTo(controller)
        .setTween('#services .bg-services', {y: '-70%', ease: Linear.easeNone});

var function_bg = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '#function .bg-function',
    duration: '500%'
})
        .addTo(controller)
        .setTween('#function .bg-function', {y: '-70%', ease: Linear.easeNone});

var contact_bg = new ScrollMagic.Scene({
    triggerHook: 'onEnter',
    triggerElement: '#contact .bg-contact',
    duration: '500%'
})
        .addTo(controller)
        .setTween('#contact .bg-contact', {y: '-70%', ease: Linear.easeNone});


