document.body.innerHTML = document.body.innerHTML.replace(/([0-9]+)([a-z ]*) credit(s)/g, function(match, creditNumber, qualifier, suffix) {
    creditNumber = ( parseInt(creditNumber, 10) / 3 );

    if (creditNumber == 1) {
        suffix = '';
    }

    if (qualifier == '') {
        qualifier = ' course';
    }

    return creditNumber + qualifier + suffix;
});