const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
let todo = ["do that", "do this"];
let worktodo = ["do that", "do this"];
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    var page = "/";
    res.render('index', { page: page, todo: todo });
});
app.get('/work', function(req, res) {
    var page = "/work";
    res.render('index', { page: page, todo: worktodo });
});

app.post("/", (req, res) => {
    var a = req.body.routine;
    todo.push(a);
    res.redirect('/');

});
app.post("/work", (req, res) => {
    var a = req.body.routine;
    worktodo.push(a);
    res.redirect('/work');

});

app.listen(3000, function() {
    console.log("yay working");

});