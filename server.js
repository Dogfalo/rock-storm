// ========================
// ==== Express server ====
// ========================

var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/static/'));

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
console.log('Express server started on port %s', server.address().port);