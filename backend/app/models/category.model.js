const mongoose = require("mongoose");

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: String,
    spec: Object,
  })
);


Category.initData = async () => {
  await Category.deleteMany({}, function () {
    console.log("categorys table is initialized");
  });
  const category1 = new Category({
    name: "TV",
    spec: {
      spec1: { "Screen type": ["LED", "LCD", "OLED"] },
      spec2: "Screen size",
    },
  });
  category1.save(function (err, book) {
    if (err) return console.log("db initialize failed!");
  });
  const category2 = new Category({
    name: "Laptops",
    spec: {
      spec1: { "Processor": ["Intel", "AMD"] },
      spec2: "Ram Memory"
    }
  });
  category2.save(function (err, book) {
    if (err) return console.log("db initialize failed!");
  });
  const category3 = new Category({
    name: "Shoes",
    spec: {
      spec1: { "Material": ["Leather", "Plastic"] },
      spec2: "Number/Size",
    }
  });
  category3.save(function (err, book) {
    if (err) return console.log("db initialize failed!");
  });
}
module.exports = Category;


