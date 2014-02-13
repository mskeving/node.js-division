var divide = function() {
    numerator = $('#num').val();
    denomenator = $('#den').val();

    if (isNaN(numerator) || isNaN(denomenator)) {
        warning('You entered a non valid number');
    } else if (denomenator == 0){
        warning('Can\'t divide by zero');
    } else {
        quotient = numerator/denomenator;
        console.log(quotient);
        $('#result').text(quotient);
    }
}

function warning(msg) {
    alert(msg);
}
