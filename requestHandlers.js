var exec = require('child_process').exec;
var querystring = require('querystring');

function start(response, postData){
    console.log("Request handler 'start' was called");

    var body = '<html>'+
     '<head>'+
     '<meta http-equiv="Content-Type" content="text/html; '+
     'charset=UTF-8" />'+
     '</head>'+
     '<body>'+
     '<form action="/upload" method="post">'+
     '<textarea name="text" rows="1" cols="5"></textarea>'+
     '<textarea name="text" rows="1" cols="5"></textarea>'+
     '<input type="submit" value="divide" />'+
     '</form>'+
     '</body>'+
     '</html>';

    response.writeHead(200, {'Content-Type': 'text.plain'});
    response.write(body);
    response.end();
}

function upload(response, postData) {
    console.log("Request handler 'upoad' was called.");
    response.writeHead(200, {'Content-Type': 'text.plain'});
    responseText = querystring.parse(postData).text;
    
    if (isNaN(responseText[0]) || isNaN(responseText[1])){
        response.write('only numbers please!');
    } else {
    response.write('you submitted: ' + responseText[0] +
        ' and ' + responseText[1]);
    }
    response.end();
}


exports.start = start;
exports.upload = upload;
