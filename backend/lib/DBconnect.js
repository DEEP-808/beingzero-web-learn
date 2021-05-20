const mongoose = require('mongoose');
const config = require('../config/config');
const DBoptions={};
const connectionString=config.dbConnectionString;

module.exports = {
    connect:function(){
    // var password = process.env.DBatlas_password;
    // console.log("password is :",password); 
        mongoose.connect(connectionString, { useUnifiedTopology: true, useNewUrlParser: true }).catch(err => console.error(err));

        mongoose.connection.on('connected',function(){
            console.log("DataBase connection established");
        })
    }
}

