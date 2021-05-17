const { json } = require('express');
const express = require('express');
 
const app = express();

var user =[
    {username: 'admin1', email:'deep@12m.com' , id: 1},
    {username: 'admin2', email:'deep@13m.com' , id: 2}
];


app.use(express.static('frontend'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
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



app.get('api/users/:userId',function(req,res){
    var userId = req.params.userId;
    console.log(userId);
    let indx=-1;
    for(var i=0;i<user.length;i++)
    {
        if(user[i].id==userId){
            indx=i;
            break;
        }
    }
    if(idx==-1)
    {
        res.json({error:'user not found'});
    }
    else
        res.json(user[indx]);
})

var tasks=[];

app.get("/todoapi",function(req,res){
    res.sendFile(__dirname+"/frontend/html/todosapi.html");
});

app.get('/api/todo',function(req,res){
    res.send(tasks);
});


app.get('/api/todo/:todoID',function(req,res){
    var todoID=req.params.todoID;
    for(var i=0;i<tasks.length;i++)
    {
        if(tasks[i].todoID==todoID)
        {
            res.send(tasks[i]);
        }
    }
});

app.put('/api/todo/:todoID',function(req,res){
    for(var i=0;i<tasks.length;i++)
    {
        if(tasks[i].todoID==req.params.todoID)
        {
            tasks[i]=req.body;
            return;
        }
    }
    tasks.push(req.body);
})


app.delete('/api/todo/:todoID',function(req,res){
    for(var i=0;i<tasks.length;i++)
    {
        if(tasks[i].todoID==req.params.todoID)
        {
            tasks.splice(i,1);
            return;
        }
    }
})

app.post('/api/todo',function(req,res){
    tasks.push(req.body);
})

app.get("/login",function(req,res){
    let path = __dirname+"/frontend/html/login.html";
    res.sendFile(path);
});


app.get("/register",function(req,res){
    let path = __dirname+"/frontend/html/register.html";
    res.sendFile(path);
});

const PORT = process.env.PORT || 3000;
 
app.listen(PORT, function(){
    console.log("Server Starting running on http://localhost:"+PORT);
});