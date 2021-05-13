const express = require('express');
 
const app = express();

app.use(express.static('frontend'));

app.get("/", function(req, res){
    res.send("Welcome to My Basic Site");
})
 
app.get("/resume", function(req, res){
    let path = __dirname+"/frontend/html/resume.html";
    res.sendFile(path);
})

app.get("/search",function(req,res){
    let path = __dirname+"/frontend/html/search.html";
    res.sendFile(path);
})

app.get("/todo",function(req,res){
    let path = __dirname+"/frontend/html/todo.html";
    res.sendFile(path);
})

app.get("/color",function(req,res){
    let path = __dirname+"/frontend/html/color.html";
    res.sendFile(path);
})

app.get("/login",function(req,res){
    let path = __dirname+"/frontend/html/login.html";
    res.sendFile(path);
})

app.get("/register",function(req,res){
    let path = __dirname+"/frontend/html/register.html";
    res.sendFile(path);
})

// Heroku will automatically set an environment variable called PORT
const PORT = process.env.PORT || 3000;
 
// Start the server
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
});