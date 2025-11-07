const express = require('express');
const app = express();
 
app.use(express.json());

app.post('/health-checkup', function (req, res) {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    res.send(`you have ${kidneysLength} kidneys`);
})

app.use (function (err, req, res, next) {
    res.json({
        msg: "something is wrong!"
    });
});
app.listen(3000);