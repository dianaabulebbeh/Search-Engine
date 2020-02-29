var mongoose=require('mongoose');
var schema=mongoose.Schema;
var searchschema=new schema({
    _id: String,
    English:String,
    Arabic:String,
});
module.exports=mongoose.model('translate', searchschema,'translate');


