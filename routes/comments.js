var express =require("express");
var router = express.Router();
var campground = require("../models/campground.js");
var Comment=require("../models/comment.js");
// ==================
// Comments Routes
// ==================

router.get("/campgrounds/:id/comments/new",isLoggedIn,function(req,res){
    //find campground

    campground.findById(req.params.id,function(err,campground){
        if(err){
            console.log(err);
        }else{
            res.render("comments/new.ejs",{campground:campground});
        }
    });
   
});

router.post("/campgrounds/:id/comments",function(req,res){
    //lookup campground usind ID
    campground.findById(req.params.id,function(err,campground){
         if(err){
             console.log(err);
             res.redirect("/campgrounds");
         }
         else{
             Comment.create(req.body.comment,function(err,comment){
                 if(err){
                     console.log(err);
                 }
                 else{
                     //add username and id to comment
                     comment.author.id=req.user._id;
                     comment.author.username = req.user.username;
                     console.log("New comment's username will be: "+req.user.username);
                     //save comment
                     comment.save();
                     campground.comments.push(comment);
                     campground.save();
                     res.redirect('/campgrounds/'+ campground._id);
                 }
             }); 
         }
    });
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;