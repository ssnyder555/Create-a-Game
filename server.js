let express = require("express");
let app     = express();

app.set("view engine", "ejs")

app.get("/", function(req, res){
  res.render("landing");
})

app.get("/diskparks", function(req, res){
  let diskparks = [
    {name: "Circle C Ranch", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfrcX26C32NBg1MLYA7751pgnIThivKfSauaMyqJFZjBhIC69HA"},
    {name: "Zilker Park", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-pV2Kf7guw-FiJYxGocZbF8oJRo2NDO8_9_3lJjAvvqYp7GB"},
    {name: "Mery More", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcQ6jo5oePP2YdCuJ_lU0BF4-T2o0nusAiI5EKNNyO4EGR8vol"}
   ]
   res.render("diskparks", {diskparks: diskparks});
});


app.listen(3000, function(){
  console.log("disk server is started");
})
