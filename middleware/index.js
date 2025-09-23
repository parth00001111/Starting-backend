const express = require('express');
const app = express();
let numberofRequest = 0;

function calculateRequest(req, res, next) {
    numberofRequest++;
    
    next();
}
app.use(calculateRequest);
app.use(express.json());
app.post('/health-checkup', function (req, res) {
    res.json({
        msg: "hi there"
    })
    
});
app.get('/health-checkup', function (req, res) {
    res.json({
        numberofRequest
    })
})



app.listen(3000);