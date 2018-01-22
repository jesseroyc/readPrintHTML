function getHTML (options, callback) {

	var https = require('https');

	var buffer = [];

	https.get(options, function (response) {

		//What does setting encoding mean???
		response.setEncoding('utf8');

		//Don't understand the .on function and the setEncoding function
		response.on('data', function (data) {
			console.log('Chunk Received. Length: ' + data.length + '\n');

			buffer += data;
			
		});

		response.on('end', function() {
			console.log(buffer);
			console.log('Response stream complete.')

		});
	});
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML());