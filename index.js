//Importing the http module
const http=require('http');

//Define the port number 
const port=4000;//server will listen for incoming request

//create a server using http.createServer()
const server=http.createServer((req,resp)=>{
    //Set the response header
    // resp.statusCode=200;
    // resp.setHeader('Content-Type','text/plain');
    resp.writeHeader(200,{'Content-Type':'text/html'})
    resp.write("Hello Everyone. Welcome to Node.js with Basic server.Server is Started.");
    resp.end();

})

//Server gets Started and listen for incoming request
server.listen(port,()=>{
    console.log('Server Started '+ port);
})

