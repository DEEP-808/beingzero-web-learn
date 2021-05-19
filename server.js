const { json } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const userTab = require("./backend/model/coursemodel");
const app = express();

const DBoptions={};

var password = process.env.DBatlas_password;
console.log("password is :",password);
const connectionString="mongodb+srv://deepaknad:"+"Deepak4D6"+"@cluster0.vkpay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }).catch(err => console.error(err));
// mongoose.connection.on('connected', function(){
//     console.log("DataBase connected");
// })
mongoose.connection.on('connected',function(){
    console.log("DataBase connection established");
})

mongoose.connection.on('connecting',function(){
    console.log("DB connecting");
})

mongoose.connection.on('connecting',function(){
    console.log("DB connecting");
})
// courselib.createcourse({name:'mean stack course',Articles:21},function(err,course){
//     console.log(course);
// })

// courselib.createcourse({coursename:'pyhton course'},function(err,course){
//     console.log(course);
// })

// courselib.createcourse({coursename:'java course'},function(err,course){
//     console.log(course);
// })
// console.log("Current courses");
// courselib.getallcourses(function(err,courseobjarr){
//     console.log(courseobjarr);
// });

app.get("/",function(req,res){
    res.sendFile(__dirname+"/frontend/html/crud.html");
})

var tests = [
    { 'name': 'Javascript', 'id': '1', 'Articels': "43" },
    { 'name': 'HTML', 'id': '2', 'Articels': "1" },
    { 'name': 'CSS', 'id': '3', 'Articels': "24" },
]


app.get('/crud/get',function(req, res){
    userTab.find()
    .then((result)=>{
     res.send(result)
    })
    .catch((err)=>{
        console.log(err)
    })
})

app.post('/crud/post',function(req, res){
    var newt= req.body;
    console.log(newt)
    const table= new userTab({
        name: newt.name,
        Articels: newt.Articels
    })
    console.log(table)
    table.save()
 })

 app.delete('/crud/del:id', function(req, res){
    var i=req.params.id
    console.log(i)
        userTab.findByIdAndDelete(i,function(err,orb){
        if(err)
        console.log("ERROR:"+err)
        else 
        console.log("SUCCESS")
    })
})

app.put('/crud/put:id', function(req, res){
    var i=req.params.id
    userTab.findByIdAndUpdate(i,function(err,obj){
        if(err)
        console.log("ERROR:"+err)
        else {
            console.log(obj.Articels)
        var obj={Articels: obj.Articels }
        }
})
})


// var user =[
//     {username: 'admin1', email:'deep@12m.com' , id: 1},
//     {username: 'admin2', email:'deep@13m.com' , id: 2}
// ];


app.use(express.static('frontend'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.get("/", function(req, res){
//     res.send("Welcome to My Basic Site");
// })
 
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