'use strict';

const express = require("express");

const app = express();

const requestTime = (req, res, next) => {
 req.requestTime = Date.now()
}

app.use(requestTime)

app.get("/", (req, res, next) => {
  console.log("hello world");
});

app.listen(3000, ()=> {
  console.log("Server is up on 3000");
})
