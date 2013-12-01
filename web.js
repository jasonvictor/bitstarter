var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

  var strBuffer = fs.readFile(path.join(process.cwd(), 'index.html'), 'utf-8');

  response.send(strBuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
