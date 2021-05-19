const mongoose=require('mongoose');
var coursemodel = new mongoose.Schema({
    name:{
        type:String,
         required: true
    },
    Articels:{
        type:Number,
        required: true
    }
})

var userTab=mongoose.model('course',coursemodel);
module.exports = userTab;
