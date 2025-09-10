const express = require('express'); 
const app = express(); 
const users = [{
    name: "parth",
    kidneys: [{
        healthy: false
    }]
}];
// Get Request
app.get('/', function (req, res) {
    const parthKidneys = users[0].kidneys;
    const numberOfKidneys = parthKidneys.length;
    let numberofHealthyKidneys = 0;
    
    for (let i = 0; i < parthKidneys.length; i++) {
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
//used app.use for post request
app.use(express.json());
//Post Request
app.post('/', function (req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "done"
    })
});
app.listen(3000);