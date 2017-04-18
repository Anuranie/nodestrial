var url = require('url');

// const http = require('http');
// const fs = require('fs');

// const hostname = '127.0.0.1'; //loop back address
// const port = 3000; // setting up the port



var urlValue = 'http://en.wikipedia.org/10/20';

// const server = http.createServer(function(req,res){



// });

var paraArray = urlValue.split('&');
for(var i=0; i< paraArray.length; i++){
	var current = paraArray[i].split('/');
}

	console.log(current[3], current[4]);

var tax = (current[4]*current[3])/100;

console.log('Tax : ' +tax);


var amount = (Number(current[3])+tax);

console.log('Amount to be paid : ' +amount);



