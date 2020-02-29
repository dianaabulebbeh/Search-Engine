var router =require('express').Router();
router.use('/search',require('./routes/search'))
module.exports=router;