var express = require('express');
var router = express.Router();

var crtlMain = require('../controllers/main');  //Mudanças para funcionar o controller

router.get('/',crtlMain.index);
module.exports = router;