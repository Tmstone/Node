/*
localhost:6789/    This route should serve a view file called index.html and display a greeting.
localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas.
localhost:6789/dojos/new    This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).
*/

const http = require('http');
const fs = require('fs');
const server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);
    
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            //fs.readFile('/static/stylesheet/style.css', static('static'))
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
