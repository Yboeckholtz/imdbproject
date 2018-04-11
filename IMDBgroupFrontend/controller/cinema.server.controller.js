var Cinema = require('../models/cinema.server.model');

exports.create = function (req, res) {
  var entry = new Cinema({
    memberName: req.body.memberName,
    project: req.body.project,
    workYesterdag: req.body.workYesterday,
    workToday: req.body.workToday,
    impediment: req.body.impediment
  });

  entry.save();

  //redirect to home pag...
  res.redirect(301, '/');
};

exports.getNote = function (req, res){
  res.render('newnote', { title: 'Cinema - New Note'});
}
