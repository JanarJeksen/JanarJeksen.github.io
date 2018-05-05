
$(function() {
	//this is a note about whether we're in the middle of moving Meg's tile... you'll see we use it in Meg's part of the code below
	var country = false;

	

  $('#v1').mouseenter( function() { 
    $(this).fadeOut('fast', function() {
        $('#p1').fadeIn('slow');

});

});

  $('#p1').mouseout( function() { 
    $(this).fadeOut('fast', function() {
        $('#v1').fadeIn('slow');

});

});

 $('#v2').mouseenter( function() { 
    $(this).fadeOut('fast', function() {
        $('#p2').fadeIn('slow');

});

});

 $('#p2').mouseout( function() { 
    $(this).fadeOut('fast', function() {
        $('#v2').fadeIn('slow');

    });

});    

 $('#v3').mouseenter( function() { 
    $(this).fadeOut('fast', function() {
        $('#p3').fadeIn('slow');
});

 });

$('#p3').mouseout( function() { 
    $(this).fadeOut('fast', function() {
        $('#v3').fadeIn('slow');
});

 });




 $('#v4').mouseenter( function() { 
    $(this).fadeOut('fast', function() {
        $('#p4').fadeIn('slow');
});

    });

 $('#p4').mouseout( function() { 
    $(this).fadeOut('fast', function() {
        $('#v4').fadeIn('slow');
});

    });


 $('#v5').mouseenter( function() { 
    $(this).fadeOut('fast', function() {
        $('#p5').fadeIn('slow');


});

    });

  $('#p5').mouseout( function() { 
    $(this).fadeOut('fast', function() {
        $('#v5').fadeIn('slow');

        
});

    });
 $('#v6').mouseenter( function() { 
    $( this).fadeOut('fast', function() {
        $('#p6').fadeIn('slow');



});
});

 $('#p6').mouseout( function() { 
    $( this).fadeOut('fast', function() {
        $('#v6').fadeIn('slow');



});
});
});

