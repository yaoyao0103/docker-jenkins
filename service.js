const express = require('express');
const app = express();

app.get('/', function(req, res, next){
    res.json({msg: "hello world!"})
});

app.get('/test', function(req, res, next){
    res.json({msg: "hello world test!"})
});

var server = app.listen(3000, () => {
    console.log('Node server is running..')
})