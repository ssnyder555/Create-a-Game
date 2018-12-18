let express    = require("express");
let router     = express.Router({mergeParams: true});
let Campground = require("../models/campground");
let Comment   = require("../models/comment");

// comments new
router.get("/new", isLoggedIn, function(req, res){
    // find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else {
             res.render("comments/new", {campground: campground});
        }
    })
});

// comments create
router.post("/",isLoggedIn,function(req, res){
   //lookup campground using ID
   Campground.findById(req.params.id, function(err, campground){
       if(err){
           console.log(err);
           res.redirect("/campgrounds");
       } else {
        Comment.create(req.body.comment, function(err, comment){
           if(err){
               console.log(err);
           } else {
             // add username and id to somment
             comment.author.id = req.user._id;
             comment.author.username = req.user.username;
             comment.save();
               campground.comments.push(comment);
               campground.save();
               
               res.redirect('/campgrounds/' + campground._id);
           }
        });
       }
   });
});
// middleware
function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};

module.exports = router;
