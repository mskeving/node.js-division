var divide = function() {
    numerator = document.getElementById('num').value;
    denomenator = document.getElementById('den').value;

    if (isNaN(numerator) || isNaN(denomenator)) {
        warning('You entered a non valid number');
    } else if (denomenator == 0){
        warning('Can\'t divide by zero');
    } else {
        quotient = numerator/denomenator;
        console.log(quotient);
        document.getElementById('result').innerHTML = quotient;
    }
}

function warning(msg) {
    alert(msg);
}
