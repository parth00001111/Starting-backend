const express = require('express');
const app = express();

function calcSum(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
        
    }
    return sum;
}
app.get('/health-checkup', function(req, res) {
    const n = req.query.n;
    const ans = calcSum(n);
    res.send(`the final sum is : ${ans}`);
})

app.listen(3000);