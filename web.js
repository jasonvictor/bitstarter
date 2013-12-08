var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

  var strBuffer = fs.readFileSync('./index.html', 'utf-8');

  console.log("file output: " + strBuffer);
  response.send(strBuffer);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
