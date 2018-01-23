module.exports = function getHTML (options, callback) {

	var https = require('https');

	https.get(options, function (response) {

		var buffer = [];
		//What does setting encoding mean???
		response.setEncoding('utf8');

		//Don't understand the .on function and the setEncoding function
		response.on('data', function (data) {
			console.log('Chunk Received. Length: ' + data.length + '\n');
			buffer += data;
				
		});

		response.on('end', function() {
	   		console.log('Response stream complete.')
	   		callback(buffer);
		});
    });
}