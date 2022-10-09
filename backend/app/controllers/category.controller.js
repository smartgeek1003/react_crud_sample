const db = require("../models");
const Category = db.category;

exports.getAllList = (req, res) => {
  Category.
    find().
    exec((err, types) => {
      if (err) {
        res.status(500).send("Server Error");
      }
      res.status(200).send(types);
    });
}