const express = require('express');
const app = express();
app.use(express.json());
app.post("/health-checkup", function(req, res) {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("you have " + kidneyLength + " kidneys");

});                   //ugly way of input validation

//if someone else can read your data, end user does not see this output 
//to handle this we use global catches:- we will use global catches 

app.use(function(err, req, res, next) {// it takes 4 inputs
    res.json({
        msg: "sorry something is up with our server"
    });
});

app.listen(3000);