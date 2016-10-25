var express = require('express');
var router = express.Router();

var ctrlMain = require('../controllers/others');  //Mudanças para funcionar o controller
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

// router.get('/',ctrlMain.index);
// router.get('/david',ctrlMain.david);

/*Locations page*/
router.get('/',ctrlLocations.homelist);
router.get('/locations',ctrlLocations.locationsInfo);
router.get('/locations/review/new',ctrlLocations.addReview);

/*Others*/
router.get('/about',ctrlOthers.about);
module.exports = router;