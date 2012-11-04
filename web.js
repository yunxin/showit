var express = require('express');

var app = express.createServer(express.logger());

var $ = require('jquery');
    
$("<h1>test passes</h1>").appendTo("body");

app.get('*', function(request, response) {
  response.send($("body").html());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});