
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.divider = function(req, res){
    var numerator = parseInt(JSON.stringify(req.body.numerator);
    var denomenator = parseInt(JSON.stringify(req.body.denomenator);
 
    console.log('numerator: ' + JSON.stringify(req.body.numerator));
    console.log('denomenator: ' + JSON.stringify(req.body.denomenator));
    res.send(req.body);
}
