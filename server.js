// ========================
// ==== Express server ====
// ========================

var express = require("express");
var app = express();

app.use('/', express.static(__dirname + '/static/'));

app.get('/phaser.js', function (req, res) {
  res.sendFile(__dirname + '/node_modules/phaser/dist/phaser.js');
})

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/rockstorm.html');
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
console.log('Express server started on port %s', server.address().port);