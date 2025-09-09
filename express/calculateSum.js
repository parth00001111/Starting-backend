const express = require('express');
const app = express();

const port = 3500;
function calcSum(n) {

    let ans = 0; 
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get('/', function(req, res) {
    const n = req.query.n;
    const ans= calcSum(n);
    res.send(ans);
});
app.listen(port);   