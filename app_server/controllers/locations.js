/**
 * Created by david on 24/10/16.
 */
module.exports.homelist = function (req,res) {
    res.render('homelist',{title : 'locations',teste: 'teste'});
}

module.exports.locationsInfo = function (req,res) {
    res.render('locationsInfo',{title : 'info',msg: 'Locations Info'});
}

module.exports.addReview = function (req,res) {
    res.render('addReview',{title : 'addReview',msg: 'Locations Info'});
}