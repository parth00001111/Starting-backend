// we can give a range of Callback funtion 

const express = require('express');

const app = express();

// app.get("/health-checkup", function(req, res, next) {           //there are three inputs: one is next
//     console.log("hi from req 1");
//     next();                                                     //control will reach

// }, function (req, res) {                                        //here is things will word good in earlier function

//     console.log("hi from req 2");
    
// });

function userMiddleware(req, res, next) {
    if(username != "parth" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
        
    }else {
        next();
    }
};

function kidneyMiddleware(req,res,next) {
    if(kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect inputs"
        });
    } 
    else {
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleware, function(req, res) {
    res.send("your heart is healthy");
})

app.listen(3000);