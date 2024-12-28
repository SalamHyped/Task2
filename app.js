const http=require('http');
const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'/templates');


//read html file 
const file2send=fs.readFileSync(`${dirpath}/index.html`)

const server=http.createServer (function(req,res){
  res.setHeader('Content-Type','text/html');
  res.end(file2send);

});
server.listen(3000);
console.log('Node.js web server at port 3000  is running..');

