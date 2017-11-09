let  http = require ('http');
let fs = require('fs');
//let sleep = require('sleep');


http.createServer  ((request, response) => {

	fs.readFile("./index.html", (err, html) =>{
		response.write(html);
		response.end();
	});
}
).listen(8080);
