const Booking = require('../models/booking');

exports.Create = (req, res) => {
  let booking = new Booking({
    hrId: req.decoded.id,
    date: req.body.date
  });
  booking
    .save()
    .then(data => {
      res.status(200).json({
        success: true,
        data
      });
    })
    .catch(err => {
      res.status(400).json({
        success: false,
        err: err.message
      });
    });
};