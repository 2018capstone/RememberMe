const DBurl = "mongodb://ninanung:1004nmnm@ds016148.mlab.com:16148/rememberme"

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const connectHistoryApiFallback = require("connect-history-api-fallback");

const login = require("./routes/login.js");
const signup = require("./routes/signup.js");
const insert = require("./routes/insert.js");
const getaccount = require('./routes/getaccount.js');
const getaccountlist = require('./routes/getaccountlist.js');
const deleteaccount = require("./routes/deleteaccount.js");
const findaccount = require("./routes/findaccount.js");
const profileedit = require("./routes/profileedit.js");

const app = express();
const http = require("http").Server(app);
mongoose.connect(DBurl, {
    useMongoClient: true
});

app.use(connectHistoryApiFallback());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/login', login);
app.use('/api/signup', signup);
app.use('/api/insert', insert);
app.use('/api/getaccount', getaccount);
app.use('/api/getaccountlist', getaccountlist);
app.use('/api/deleteaccount', deleteaccount);
app.use('/api/findaccount', findaccount);
app.use('/api/profileedit', profileedit);

http.listen(app.get("port"), function() {
    console.log("server start in " + app.get("port"));
})