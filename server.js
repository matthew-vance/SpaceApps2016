var express = require('express'),
app = express();

app.use(express.static(__dirname + '/app'));

app.set('views', __dirname + "/app/views");
app.set('port', (process.env.PORT || 5000));

app.engine('html', require('ejs').renderFile);

app.get('/', function(req, res){
    res.render('index.html');
});

app.listen(app.get('port'), function(){
    console.log('Listening on port', app.get('port'));
});
