const zod = require("zod");
//
function inputValidate(arr) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(arr);
    console.log(response);
}

app.post('/login', function(req, res) {
    const response = inputValidate(req.body);
    if(!response.success) {
        res.json({
            msg: "your input are invalid"
        })
        return;
    }
})

// inputValidate({
//     email: "parth@gmail.com",
//     password: "lodalassan"
// });