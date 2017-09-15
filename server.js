// Dependencies
// =======================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =======================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/',function(req, res){
	res.sendFile(path.join(__dirname,'public/views/index.html'));
	
})

app.get('/make-reservation',function(req, res){
    res.sendFile(path.join(__dirname, 'public/views/make.html'))
})

app.get('/tables',function(req, res){
    res.sendFile(path.join(__dirname, 'public/views/view.html'))
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});