var mangoose =require("mongoose");
var campground=require("./models/campground.js");
var Comment = require("./models/comment.js");

var data = [
    {
    name:"two",
    image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
    description:"hahahahahahahaThe Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a fighting bull. Aventador (pronounced [aβentaˈðoɾ]) earned the Trofeo de la Peña La Madroñera for its courage in the arena in Zaragoza, Spain, in 1993"},
    {
        name:"three",
        image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
        description:"hahahahahahahaThe Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a fighting bull. Aventador (pronounced [aβentaˈðoɾ]) earned the Trofeo de la Peña La Madroñera for its courage in the arena in Zaragoza, Spain, in 1993"
    },
    {
        name:"four",
        image:"https://www.nps.gov/shen/planyourvisit/images/20170712_A7A9022_nl_Campsites_BMCG_960.jpg?maxwidth=1200&maxheight=1200&autorotate=false",
        description:"hahahahahahahaThe Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini. In keeping with Lamborghini tradition, the Aventador is named after a fighting bull. Aventador (pronounced [aβentaˈðoɾ]) earned the Trofeo de la Peña La Madroñera for its courage in the arena in Zaragoza, Spain, in 1993"
    }
]

//remove all campgrounds
function seedDB(){
campground.remove({},function(err){
    /*if(err){
        console.log(err);   
    }
    console.log("removed campgrounds");
    //add a few campgrounds
data.forEach(function(seed){
    campground.create(seed,function(err,campground){
        if(err){
            console.log(err)
        }
        else{
            console.log("added campground");
            //create  a comment
            Comment.create(
                {
                    text:"This place is great, but I wish there was internet",
                    author:"homer"
                },function(err,comment){
                    if(err){
                        console.log(err);
                    }
                    else{
                        campground.comments.push(comment);
                        campground.save();
                        console.log("created new comment");
                    }
                }
            );
        }
    });
});*/
});
} 



module.exports=seedDB;