const express = require('express');
const app = express();
const users = [{
    name: "parth",
    kidneys: [{
        healthy: false 
    }]
}];
app.use(express.json());
app.get('/', function(req, res) {
    const parthKidneys = users[0].kidneys;
    const numberOfKidneys = parthKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < parthKidneys.length; i++) {
        if(parthKidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;

    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnHealthyKidneys
    });
});
app.post('/', function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
})
res.json({
    msg: "Done"
})
})

app.put('/', function(req, res) {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg: "done"
    })
})
 
app.delete('/', function(req, res) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        msg: "done"
    })
})
app.listen(3000);