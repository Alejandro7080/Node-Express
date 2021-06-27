const express = require('express')
const app = express();
const port = 3000;

app.get('/', function(req, res){
    res.send("Hello");
})
app.get('/home', function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
})
app.get('/about', function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + '/index2.html');
})
app.get('/contact', function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + '/index3.html');
})
app.post('/home', function (req, res){
    res.send("post() success!");
})
app.listen(port, function(){
    console.log('Listening at port: ' + port)
})
