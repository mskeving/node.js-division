var exec = require('child_process').exec;
var querystring = require('querystring');
var fs = require('fs');

function start(response, postData){
    console.log("Request handler 'start' was called");

    response.render('./index.html');
    
    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err;
        }
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(html);
        response.end();
    });

    var body = '<html>'+
     '<head>'+
     '<meta http-equiv="Content-Type" content="text/html; '+
     'charset=UTF-8" />'+
     '</head>'+
     '<body>'+
     '<form action="/display" method="post">'+
     '<textarea name="text" rows="1" cols="5"></textarea>'+
     '<textarea name="text" rows="1" cols="5"></textarea>'+
     '<input type="submit" value="divide" />'+
     '</form>'+
     '</body>'+
     '</html>';

}

function upload(response, postData) {
    console.log("Request handler 'upoad' was called.");
    response.writeHead(200, {'Content-Type': 'text.plain'});
    responseText = querystring.parse(postData).text;
    var numerator = responseText[0];
    var denomenator = responseText[1];

    if (isNaN(numerator) || isNaN(denomenator)){
        response.write('only numbers please!');
    } else {
        quotient = numerator/denomenator;
        response.write('you submitted: ' + responseText[0] +
            ' and ' + responseText[1]);
        response.write('quotient: ' + quotient);
    }
    response.end();
}


exports.start = start;
exports.upload = upload;
