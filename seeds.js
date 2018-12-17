var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Circle C",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NarQ0A-ZIvpL2_Z0hAxBEURFYSpYCeEmmnmCHwa4ftvLQAWAsA",
        description: "blah blah blah"
    },
    {
        name: "Merry More",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7lYMLSjKlrBD4qN6PaOiEwYeZcTeQBg69SE5Ueg8hrUjsPL-QA",
        description: "blah blah blah"
    },
    {
        name: "Organ Park",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTI26CuCNJdu6FLvPjoqZn35cz99xiG0LVKnKYBGrW3VOUeu6k",
        description: "blah blah blah"
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    });
    //add a few comments
}

module.exports = seedDB;
