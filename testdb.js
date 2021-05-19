const courselib = require("./backend/lib/courselb");
const mongoose = require('mongoose');
const connectionString="mongodb+srv://deepaknad:"+"Deepak4D6"+"@cluster0.vkpay.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"; 
mongoose.connect(connectionString, { useUnifiedTopology: true}, { useNewUrlParser: true }).catch(err => console.error(err));
// mongoose.connection.on('connected', function(){
//     console.log("DataBase connected");
// })
mongoose.connection.on('connected',function(){
    console.log("DataBase connection established");
})

mongoose.connection.on('connecting',function(){
    console.log("DB connecting");
})
courselib.createcourse({coursename:'mean stack course'},function(err,course){
    console.log(course);
})