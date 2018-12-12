let express = require("express"),
 app        = express(),
 bodyParser = require("body-parser"),
 mongoose   = require("mongoose")

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.set("view engine", "ejs");

// schema setup
let diskparkSchema = new mongoose.Schema({
  name: String,
  image: String
});

let Diskpark = mongoose.model("Diskpark", diskparkSchema);

// Diskpark.create(
//   {
//     name: "Circle C Ranch",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfrcX26C32NBg1MLYA7751pgnIThivKfSauaMyqJFZjBhIC69HA"
//   },
//   function(err, diskpark){
//     if(err){
//       console.log(err);
//     } else {
//       console.log("newly created park");
//       console.log(diskpark);
//     }
//   }
// )


app.get("/", function(req, res){
  res.render("landing");
})

app.get("/diskparks", function(req, res){
   // res.render("diskparks", {diskparks: diskparks});
   Diskpark.find({}, function(err, allDiskparks){
     if(err){
       console.log(err);
     } else {
       res.render("diskparks", {diskparks:allDiskparks})
     }
   })
});

// should show the form that will send the data to
// this post route
app.get("/diskparks/new", function(req, res){
  res.render("new.ejs");
})

app.post("/diskparks", function(req, res){
  let name  = req.body.name;
  let image = req.body.image;
  let newDiskpark = {name: name, image: image}
  //create a new diskpark save to db
  Diskpark.create(newDiskpark, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect("/diskparks");
    }
  });
});


app.listen(3000, function(){
  console.log("disk server is started");
})
