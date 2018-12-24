// var mongoose = require("mongoose");
// var Campground = require("./models/campground");
// var Comment   = require("./models/comment");
//
// var seeds = [
//     {
//         name: "Circle C",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4NarQ0A-ZIvpL2_Z0hAxBEURFYSpYCeEmmnmCHwa4ftvLQAWAsA",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//         name: "Merry More",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz7lYMLSjKlrBD4qN6PaOiEwYeZcTeQBg69SE5Ueg8hrUjsPL-QA",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     },
//     {
//         name: "Organ Park",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTI26CuCNJdu6FLvPjoqZn35cz99xiG0LVKnKYBGrW3VOUeu6k",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//     }
// ]
//
// async function seedDB(){
//   try {
//     await Comment.remove({});
//     console.log("Campgrounds removed");
//     await Campground.remove({});
//     console.log("Comments removed");
//
//     for(const seed of seeds){
//       let campground = await Campground.create(seed);
//       console.log("Campground created");
//       let comment = await Comment.create(
//           {
//               text: "This place is great, but I wish there was internet",
//               author: "Homer"
//           }
//       )
//           console.log("Comments created");
//           campground.commetn.push(comment);
//           campground.save();
//           console.log("Comment added to campground");
//     }
//   } catch(err) {
//     console.log(err);
//
//   }
//
// }
//
// module.exports = seedDB;
