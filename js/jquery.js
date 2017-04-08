'use strict';

$(function () {


    $('#first').css({
        color: 'red',
        backgroundColor: 'black'
    });


    //alert($('#first').text());

    $('#first').text('Hello world');

    //alert($('#second').html());

    $('#second').html('<b>Cześć</b>');

    $('#second').before('<p id="paragraf">Tekst przykladowy</p>');
    $('#paragraf').css({ // aby stylować trzeba nadać id
        color: 'red'
    });

    /*$('li').each(function() {
        alert($(this).text());

        
    })*/
    
    $('#przycisk').click(function() {
    alert($('#przycisk').text());    
    
    }
    );
                         
});


