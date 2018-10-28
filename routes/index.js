

var options = {
  host: 'www.example.org',
  path: '/'
};

module.exports = function(app) {
 app.get('/', function(req, res) {
   res.render('pages/index');
 });

 https.request(options, callback);