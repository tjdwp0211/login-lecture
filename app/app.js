"user strict";

// 모듈
const express = require("express");
const app = express();

const PORT = 3000;
// 라우딩
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");
// 앱 세팅

app.use("/", home) // use -> 미드 웨어를 등록해주는 메서드.

module.exports = app;