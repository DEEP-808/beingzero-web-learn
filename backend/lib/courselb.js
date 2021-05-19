// const coursemodel = require('../model/coursemodel');

// module.exports.createcourse = function(courseobj,callback){
//     var course = new coursemodel()
//     course.save(function(err,courseobj){
//         if(err)
//              console.log("err"+err);
//         else
//         {
//             callback(err,courseobj);
//         }
//     })
// }

// module.exports.getallCourses = function(callback){
//     var query={};
//     userMOdel.find(query,function(err,courseobjarr){
//             if(err)
//                 console.log("err"+err);
//             else
//             {
//                 callback(err,courseobj);
//             }
//         })
// }
const coursemodel = require('../model/coursemodel');

module.exports.createcourse = function(courseobj,callback){
    var course=new coursemodel(courseobj);
    course.save(function(err,courseobj){
        if(err)
        {
            console.log("err"+err);
        }
        else{
            callback(err,courseobj);
        }
    })
}

module.exports.getallcourses = function(callback){
    var query = {}
    coursemodel.find(query,function(err,courseobjarr){
        if(err)
        {
            console.log("err"+err);
        }
        else{
            callback(err,courseobjarr);
        }
    })
}
