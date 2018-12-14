let Diskpark   = require("./models/diskparks"),
    express    = require("express"),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    app        = express(),
    seedDB     = require("./seeds")

seedDB();
mongoose.connect("mongodb://localhost/disk_yelp_2", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.get("/", function(req, res){
  res.render("landing");
});

// Index - shows all diskparks
app.get("/diskparks", function(req, res){
   // res.render("diskparks", {diskparks: diskparks});
   Diskpark.find({}, function(err, allDiskparks){
     if(err){
       console.log(err);
     } else {
       res.render("index", {diskparks:allDiskparks});
     }
   });
});

// Create - add new diskparks to DB
app.post("/diskparks", function(req, res){
  // get data from and add to diskParks array
  let name  = req.body.name;
  let image = req.body.image;
  let desc  = req.body.description;
  let newDiskpark = {name: name, image: image, description: desc}


  //create a new diskpark save to db
  Diskpark.create(newDiskpark, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect("/diskparks");
    }
  });
});

//NEW - show form to create new campground
app.get("/diskparks/new", function(req, res){
   res.render("new");
});

// SHOW - shows more info about one park
app.get("/diskparks/:id", function(req, res){
    //find the park with provided ID
    Diskpark.findById(req.params._id).populate("comments").exec(function(err, foundDiskpark){
        if(err){
            console.log(err);
        } else {
            console.log(foundDiskpark)
            //render show template with that park
            res.render("show", {diskpark: foundDiskpark});
        }
    });
})

app.listen(3000, function(){
  console.log("disk server is started");
});
