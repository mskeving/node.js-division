var divide = function() {
    //called when button pressed
    //checks if two numbers enetered and valid. If yes, send
    //ajax request to get quotient. If not, show error message on page.

    $('#warning').text('');
    $('#result').text('');
    numerator = $('#num').val();
    denomenator = $('#den').val();

    if (numerator == '' || denomenator == '') {
        warning('You need two numbers to divide');
    } else if (isNaN(numerator) || isNaN(denomenator)) {
        warning('You entered a non valid number');
    } else if (denomenator == '0'){
        warning('Whoops, can\'t divide by zero');
    } else {
        $.ajax({
            url:'/divider',
            type: 'POST',
            dataType: 'json',
            data: {'numerator': numerator,
                'denomenator': denomenator},
            contesntType: 'application/json',
            success: function(data){
                quotient = data.quotient;
                $('#result').text(quotient);
            },
            error: function() {
                warning('server failure');
                console.log('fail');
            }
        });
    }
}

function warning(msg) {
    $('#warning').text(msg);
}
