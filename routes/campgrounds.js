
var express =require("express");
var router = express.Router();
var campground = require("../models/campground.js");
//new route


router.get("/campgrounds",function(req,res){

    campground.find({},function(err,allcampgrounds){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/index.ejs",{campgrounds:allcampgrounds});
        }
    });
    
}); 

router.get("/campgrounds/new",isLoggedIn,function(req,res){
    res.render("campgrounds/new.ejs");
});



router.post("/campgrounds",function(req,res){
    var name =req.body.name;
    var image =req.body.image;
    var des=req.body.description;
    var author ={
        id: req.user._id,
        username: req.user.username
    }
    var newCampground={name:name, image:image, description:des,author:author}
    campground.create(newCampground,function(err,newlycreated){
         if(err){
             console.log(err);
         }
         else{
             res.redirect("/campgrounds");
         }
    });
   
});

//show 

router.get("/campgrounds/:id",function(req,res){
    campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        }
        else{
            console.log(foundCampground);
            res.render("campgrounds/show.ejs",{campgrounds:foundCampground});
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