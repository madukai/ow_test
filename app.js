var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var count = 0;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    count++;
    
    res.render(GetHTMLString('webpageapp'), {req_count: count});
});

app.get('/math', function (req, res) {
    res.render(GetHTMLString('math'));
});

app.get('/game', function (req, res) {
    
    res.render(GetHTMLString('game'));
});

app.listen(3000);
console.log('Server is running on port 3000');


function GetHTMLString(str) 
{
    let htmlFile = str + '.html';

    return htmlFile;
}