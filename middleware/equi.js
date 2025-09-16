// const express = require('express');
// const app = express();
// app.get("/health-checkup", function(req, res) {
//     const username = req.headers.username;// in headers because hidden data hona chaiye username and password

//     const password= req.headers.password; in headers because hidden data hona chaiye username and password

//     const kidneyId = req.query.kidneyId;

//     if(username != "parth" || password != "pass") {//if (!(name == "parth" && passward == "pass"))//dono same hai

//         res.status(400).json({
//             "msg": "somgthing is wrong with your inputs"
            
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(400).json({
//             "msg": "something is wrong with your input"
//         });
//         return;
//     }

//     res.json({
//         msg: "your kidney is fine"
//     })
// })

const express = require ('express');
const app = express();

app.get('/', function(req, res) {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if (!(username == "parth" && password == "pass")) {
        res.status(400).json({
            msg: "you input is invalid"
        });
        return;
    }

    if(!kidneyId == 1 && !kidneyId == 2) {
        res.status(400).json({
            msg: "somethig is wrong with you inputs"
        });
        return;
    }
    res.json({
        msg: "everything is fine"
    });
});



app.listen(3000);