const express = require('express');
const app = express();

const users = [{
    name: "parth", 
    kidneys: [{
        healthy: false
    }]
}];
//GET request 

app.get('/', function (req, res) {
    const parthKidneys = users[0].kidneys;
    const numberOfKidneys = parthKidneys.length;
    let numberofHealthyKidneys = 0;
    for (let i = 0 ; i < users[0].kidneys.length; i++) {
        if(parthKidneys[i].healthy) {
            numberofHealthyKidneys++;

        }

    }
    let numberofUnHealthyKidneys = numberOfKidneys - numberofHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberofHealthyKidneys,
        numberofUnHealthyKidneys
    })
});
//used app.use

app.use(express.json());

//used POST request
app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done"
    })
})
//used PUT request

app.put ('/', function (req,res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "done"
    })
})
app.listen(3000);