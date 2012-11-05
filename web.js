var express = require('express');

var jsdom = require('jsdom')

var app = express.createServer(express.logger());
  
app.get('*', function(appRequest, appResponse) {
  var serverRequest = require('request');
  serverRequest('https://docs.google.com/feeds/download/documents/Export?docID=1amtY0fjKZFUr_S-Q7CQ4SuTKU7g2qJ6d1OAWaovYXf4&exportFormat=html&format=html', function (error, serverResponse, body) {
    if (!error && serverResponse.statusCode == 200) {
        jsdom.env({
            html: body,
            scripts: ['http://code.jquery.com/jquery-1.7.min.js']
        }, function (err, window) {
            var $ = window.jQuery;

            var key = appRequest.path.substring(1).toLowerCase();

            if (key.length != 0) {
                var sections = ['Summary', 'Professional Experience', 'Education', 'Technical Skills'];
                if ('Jobs'.toLowerCase().indexOf(key) != -1) {
                    key = sections[1].toLocaleLowerCase();
                }

                var filtered = sections.filter(function (x) {
                    return x.toLocaleLowerCase().indexOf(key) != -1;
                });

                if (filtered.length == 0) {
                    removeAll();
                }
                else {
                    // If there are multiple matches, we select the first one.
                    var match = sections.indexOf(filtered[0]);

                    if (match > 0) {
                        removeBefore(match);
                    }

                    if (match < sections.length - 1) {
                        removeAfter(match + 1);
                    }
                }
                function getSpanParent(text) {
                    var selector = "span:contains('" + text + "')";
                    return $(selector).parent();
                }

                function removeBefore(exclusive) {
                    var removeStart = getSpanParent(sections[0]).prev();
                    var removeEnd = getSpanParent(sections[exclusive]);
                    removeStart.nextUntil(removeEnd).remove();
                }

                function removeAfter(inclusive) {
                    var removeStart = getSpanParent(sections[inclusive]).prev();
                    removeStart.nextUntil().remove();
                }

                function removeAll() {
                    var removeStart = getSpanParent(sections[0]).prev();
                    removeStart.nextUntil().remove();
                }
            }

            appResponse.send($('html').html());
        });
    }
  })
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});