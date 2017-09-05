var express = require("express");
var router = express.Router();
var db = require("../models/");

router.get("/", function(req,res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  db.burger.findAll() 
    .then(function(dbBurger){
      console.log(dbBurger);
    var hbsObject = { burger: dbBurger };
    return res.render("index", hbsObject);
  });
  });

router.post("/burgers/create", function(req, res) {
  db.burger.create({
    burger_name: req.body.burger_name
  })
  .then(function(dbBurger){
    console.log(dbBurger);
    res.redirect("/");
  });
});


router.put("/burgers/update", function(req, res) {
db.burger.update(
{
  devoured: true
},
{
  where: {
    id: req.body.burger_id
  }
}
).then(function(dbBurger){
  console.log(dbBurger);
  res.redirect("/");
});
});


// Export routes for server.js to use.
module.exports = router;

