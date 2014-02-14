
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.divider = function(req, res){
    var numerator = parseInt(req.body.numerator);
    var denomenator = parseInt(req.body.denomenator);
    var quotient = numerator/denomenator; 

    res.contentType('json');
    res.send({'quotient': quotient});
}
