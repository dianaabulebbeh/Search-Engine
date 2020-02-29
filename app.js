var express = require("express");
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var app=express();
var port =process.env.port || 8080;
var url=('mongodb://127.0.0.1:27017/search');
mongoose.connect(url);
var db =mongoose.connection;
db.on('error',console.error.bind(console,'connection err'));
db.once('open',function(){
    console.log('DB connection alive')
});
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(require('./router'));

app.use(function(req,res,next){
    console.log("somthing is happening")
   // console.log(res)
    next();
})
app.listen(port);
console.log("server start")