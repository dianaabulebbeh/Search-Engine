var router=require('express').Router();
var list=require('../controllers/search_controllers');

router.route('/')
.get(list.getAll)
router.route('/ser')
.get(list.search);
module.exports=router;