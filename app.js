var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");


var moodboardsRouter = require("./routes/moodboards");
var usersRouter = require("./routes/users");
var userCredentials = require("./routes/userCredentials");

const cors = require("cors");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use("/moodboards", moodboardsRouter);
app.use("/users", usersRouter);
app.use("/userCredentials", userCredentials);

module.exports = app;
