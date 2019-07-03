$(document).ready(function(){

    // Input range
    var range = $('.input-range'),
    value = $('.range-value');
  
    value.html(range.attr('value') + ' 000 Kč');
  
    range.on('input', function() {
    value.html(this.value + ' 000 Kč');
    if (this.value == 50) {
        value.html(this.value + ' 000+ Kč');
    }
    });


    // Selektor - co nabízíme?
    $('.selector').click(function(){
        $('.select_items').slideToggle(200);
    });

    $('#first').click(function(){
        $('.lay2, .lay3').hide();
        $('.lay1').fadeIn(500);                     // Změní informace vpravo
        $('.selector p').html('Prezentační web');   // Změní text v inputu
        $('#portfolio2, #portfolio3').hide();       // Schová fotky
        $('#portfolio1').fadeIn(500);               // Ukáže fotku 
    });

    $('#second').click(function(){
        $('.lay1, .lay3').hide();
        $('.lay2').fadeIn(500);
        $('.selector p').html('Webovou aplikaci');
        $('#portfolio1, #portfolio3').hide();
        $('#portfolio2').fadeIn(500);
    });

    $('#third').click(function(){
        $('.lay1, .lay2').hide();
        $('.lay3').fadeIn(500);
        $('.selector p').html('Administrační systém');
        $('#portfolio1, #portfolio2').hide();
        $('#portfolio3').fadeIn(500);
    });

});


// responsive menu

$('nav i').click(function(){
    $('.menu').slideToggle(700);
    $('this').css('color', '#000');
    $('nav i').toggleClass('fa-bars');
    $('nav i').toggleClass('fa-times');
});

$('.search').click(function(){
    $('.finder').toggle();
    $('.finder').toggleClass('slide-in-right');
});