const express = require('express');
const http = require('http');
const fs = require('fs');

let fileName='';
http.createServer((req, res)=>{
  switch(req.url){
    case '/':
      fileName="/index.html";
      break;
    case '/about':
      fileName = "/about.html";
      break;
    case "/contact-me":
      fileName = "/contact-me.html";
      break;
    default:
      fileName = "/404.html"
  }
  const filePath = __dirname + fileName
  const data = fs.readFileSync(filePath);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
}).listen(8080)
