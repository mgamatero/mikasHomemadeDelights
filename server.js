const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + 'angularapp'));

app.get('/*',function(req,res){
  res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});
