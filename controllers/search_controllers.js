var search=require('../models/list_model');
var mongoose = require('mongoose');

exports.getAll=function(req,res){
    res.render('search.ejs')
}
exports.search=function(req,res,next){   
    console.log(req);
   let q=req.query.data;
   var arr=[]
    isArabic(q);   
   function isArabic(text) {
   var arabic = /[\u0600-\u06FF]/;
   result = arabic.test(text);
   console.log("text "+text)
   console.log("is Arabic "+result)
if(result){
    ///U+0627=ا U+0623=أ
   if(q=='ا' || q=='أ'){
       console.log("arabic char A ///////////// "+q)
       var reg1=new RegExp("^"+"ا"+".*")
       var reg2=new RegExp("^"+"أ"+".*")
      
        search.find ({"$or":[{Arabic:reg2},{Arabic:reg1}]
    },{ _id:0,
        __v:0
    },function(err,data){
        
        data.forEach(word => {
        arr.push(word.Arabic)
         console.log(word.Arabic)
        });
        console.log(arr)
        res.send(arr)
        next();   
        
    }).limit(1000)
        
   }
   else{

    var reg=new RegExp("^"+q+".*", 'i')
    search.find({
       Arabic:reg
},{
    _id:0,
    __v:0
},function(err,data){
    data.forEach(word => {
        arr.push(word.Arabic)
        
    });
    console.log(arr)
    res.send(arr)
    next();   
    
})
}  

}else{
    console.log("q")
    var reg=new RegExp("^"+q+".*", 'i')
   search.find({
    English:reg
      
    },{
        _id:0,
         __v:0
    },function(err,data){
        if(err) throw err;
        data.forEach(word => {               
            arr.push(word.English)
        });
        res.send(arr)
    next();  
    }
    )

    
//     search.find({
//         //English:{"$regex":q,"$options":"i"}
//  },{
//      _id:0,
//      __v:0
 //},
//  function(err,data){    
//     data.forEach(word => {               
//         arr.push(word.English)
//     });
//     console.log(arr)
//     res.send(arr)
//     next();    
//  }).limit(100)  

}
 
   }
     
 
    


}
