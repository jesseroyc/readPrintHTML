function getAndPrintHTMLChunks () {

	var https = require('https');

	var requestOptions = {
		host: 'sytantris.github.io',
		path: '/http-examples/step1.html'
	};	

	var buffer = [];

	https.get(requestOptions, function (response) {

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

getAndPrintHTMLChunks();