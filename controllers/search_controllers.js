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

    search1= new RegExp("^" + "ا")
    search2= new RegExp("^" + "أ")
   console.log("search1 "+search1.test(q))
   console.log("search2 "+search2.test(q))
   console.log(q.length==1)
   
   if(search1.test(q)|| search2.test(q)){
    if(q.length==1){
       //console.log("arabic char A ///////////// "+q)         
        search.find ({"$or":[{Arabic:search1},{Arabic:search2}]
    },{ _id:0,
        __v:0
    },function(err,data){           
        res.send(data)
        next();   
        
    })        
   }else{
       
       var o=q.substring(1);
        
     
    reg1= new RegExp("^" + "ا"+o+".*")
    reg2= new RegExp("^" + "أ"+o+".*" )

    search.find ({"$or":[{Arabic:reg1},{Arabic:reg2}]
},{ _id:0,
    __v:0
},function(err,data){        
    res.send(data)
    next();   
    
})
   }
}
   else{

    var reg=new RegExp("^"+q+".*", 'i')
    search.find({
       Arabic:reg
},{
    _id:0,
    __v:0
},function(err,data){
    res.send(data)
    next();   
    
})
}  

}else{
    console.log("q")
    var reg=new RegExp("^"+q+".*", 'i')
   search.find({
    English:reg
      
    }
    
    ,{
        _id:0,
         __v:0
    },function(err,data){
        if(err) throw err;
        res.send(data)
    next();  
    }
    ) 

}
 
   }
     
 
    


}
