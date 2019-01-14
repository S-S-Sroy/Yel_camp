var express =require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose=require("mongoose");
var passport=require("passport");
var LocalStrategy=require("passport-local");
var campground =require("./models/campground.js");
var Comment=require("./models/comment.js");
var User =require("./models/user.js");
var seedDB =require("./seeds.js");//export a function

var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campgrounds");
var indexRoutes = require("./routes/index");

seedDB();
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost/yelp_camp");

//===============
//passport config
//===============
app.use(require("express-session")({
    secret:"Once again Rusty wins cutest dog!!",
    resave:false,
    saveUninitialized:false

}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(indexRoutes);
app.use(campgroundRoutes);
app.use(commentRoutes);

app.listen(8080,function(){
    console.log("Server is ON!!!");
});