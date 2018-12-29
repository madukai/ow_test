var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// set to run express
var app = express();
// track request
var count = 0;

// PORT access
const PORT = process.env.PORT || 3000;

// Package for express to use regular HTML instead of JADE
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// home
app.get('/', function (req, res) {
    // increment count for every request
    count++;
    res.render(GetHTMLString('webpageapp'), {req_count: count});
});

// math
app.get('/math', function (req, res) {
    res.render(GetHTMLString('math'));
});

// game
app.get('/game', function (req, res) {
    
    res.render(GetHTMLString('game'));
});

app.listen(PORT);
console.log('Server is running on port ' + PORT);

// function to generate html filename
function GetHTMLString(str) 
{
    let htmlFile = str + '.html';

    return htmlFile;
}
