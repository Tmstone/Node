const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response) {
    if(request.url === '/') {
        fs.readFile('./views/index.html', 'utf8', function (errors, contents) {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    //css routing here
    else if (request.url === '/stylesheets/style.css') {
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === "/cars") {
         fs.readFile('./views/cars.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }
    //serve images
    else if (request.url === '/images/image here') {
        fs.readFile('/images/image here', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/image here') {
        fs.readFile('/images/image here', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/image here') {
        fs.readFile('/images/image here', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    //serve cats
    else if (request.url === "/cats") {
        fs.readFile('./views/cats.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
   }
   //serve images for cats page
   else if (request.url === '/images/image here') {
        fs.readFile('/images/image here', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/image here') {
        fs.readFile('/images/image here', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
    else if (request.url === '/images/image here') {
        fs.readFile('/images/image here', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }
   //serve page for cars form
   else if (request.url === "/cars/new") {
        fs.readFile('./views/newcar.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else {
        response.end('File not found!!!');
    }
});
server.listen(7077);
console.log("listening on port 7077");
