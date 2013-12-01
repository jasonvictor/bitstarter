var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {

  var buffer = new Buffer(fs.readFile('index.html'));
  var strBuffer = buffer.toString("utf-8");

  response.send(strBuffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
