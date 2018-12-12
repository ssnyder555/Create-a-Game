let express = require("express");
let app     = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

let diskparks = [
  {name: "Circle C Ranch", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfrcX26C32NBg1MLYA7751pgnIThivKfSauaMyqJFZjBhIC69HA"},
  {name: "Zilker Park", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-pV2Kf7guw-FiJYxGocZbF8oJRo2NDO8_9_3lJjAvvqYp7GB"},
  {name: "Mery More", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQ6jo5oePP2YdCuJ_lU0BF4-T2o0nusAiI5EKNNyO4EGR8vol"},
  {name: "Circle C Ranch", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfrcX26C32NBg1MLYA7751pgnIThivKfSauaMyqJFZjBhIC69HA"},
  {name: "Zilker Park", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-pV2Kf7guw-FiJYxGocZbF8oJRo2NDO8_9_3lJjAvvqYp7GB"},
  {name: "Mery More", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQ6jo5oePP2YdCuJ_lU0BF4-T2o0nusAiI5EKNNyO4EGR8vol"}
 ]

app.get("/", function(req, res){
  res.render("landing");
})

app.get("/diskparks", function(req, res){
   res.render("diskparks", {diskparks: diskparks});
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
  diskparks.push(newDiskpark);
  // get daTA from form add to diskparks array
  // redirect back to diskpark page
  res.redirect("/diskparks");
})


app.listen(3000, function(){
  console.log("disk server is started");
})
