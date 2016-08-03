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
$(function sendMail(){
  $.ajax({
    url: '/mail/sendMail',
    data: {
        nombre: $("#name").val(),
        email: $("#email").val(),
        telefono: $("#phone").val(),
        message: $("#message").val()
    },
    type: 'POST',
    datatype: JSON,
    crossDomain: false,
    success: function(respuesta){
      console.log(respuesta);

    },
    error: function(respuesta){

    }
  });
});

// $( "form" ).submit(function( event ) {

//   console.log("send");
//   event.preventDefault();
// });


// $("#submit-contact").click(function(){
//         alert("hola");
//   sendMail();
// });