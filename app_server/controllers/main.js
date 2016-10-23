/**
 * Created by david on 23/10/16.
 */
module.exports.index = function (req,res) {
    res.render('index',{title: 'David Turati'});
}

module.exports.david = function (req,res) {
    res.render('david',{title: 'Nova página no controller'});
}
