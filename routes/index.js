

/*var options = {
  host: 'https://lighthouselabs.ca/web-bootcamp',
  path: '/'
};*/

module.exports = function(app) {
 app.get('lighthouselabs Bootcamp Page', function(req, res) {
   res.render('https://lighthouselabs.ca/web-bootcamp');
 });
};

/*app.get('/about', function(req, res) {
   res.render('https://lighthouselabs.ca/web-bootcamp');
 });
};*/
// callback function
/*var callback = function() {
  console.log('In response handler callback!');
};

 module.exports = https.request(options, callback);*/