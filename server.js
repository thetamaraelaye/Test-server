const http = require("http");


myName = 'Tamara Elaye';


const server = http.createServer(function(request, response){
    response.write("Hi! ");
    response.write("My name is " + myName+ " . I am an adult. I am currently in the backend track of the ADA Program ");
    response.end()
});


server.listen(3000, function(){
    console.log('Server is running on port 3000');
});


