'use strict';

const express = require("express");

const app = express();

// const requestTime = (req, res, next) => {
//  req.requestTime = Date.now()
// }

// app.use(requestTime)

app.get("/", (req, res, next) => {
  res.send(`<h1>hello world</h1>`);
});

let PORT = process.env.prot || 8080;

app.listen(PORT, ()=> {
  console.log(`Server is up on ${PORT}`);
})

// app.listen(3000);
