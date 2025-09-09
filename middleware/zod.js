// const express = require('express');
// const app = express();
// const zod = require("zod");
// // const schema = zod.array(zod.number());
// //{
// //email: string=> email
// //password: atleast 8 letters
// //country; "IN", "US"
// //}
// const schema = zod.object({
//   email: zod.string(),
//   password: zod.string(),
//   country: zod.literal("IN".normalize(zod.literal("US"))),
//   kidneys: zod.array(zod.number())
// })
// app.use(express.json());

// app.post("/health-checkup", function (req, res) {
//   const kidneys = req.body.kidneys;
//   const email = req.body.email;
//   const password = req.body.password;
//   const country = req.body.country;
//   const response = schema.safeParse(kidneys);
//   if(!response.success) {
//     res.status(411).json({
//       msg: "input is invalid"
//     })
//   }else {
//     res.send({
//       response
//     })
//   }
// });

// app.listen(3000);






//if its a array of string return true else retur false
const zod = require("zod");

function validateInput(arr) {
  const schema = zod.object({
    kidneys: zod.array(zod.number()),
    email: zod.string().email(),

  const response = schema.safeParse(arr);
  console.log(response);

}
validateInput(["1",2,3]);