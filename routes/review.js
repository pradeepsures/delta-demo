const  express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAthour} = require("../middileware.js");
const reviewController = require("../controllers/review.js");


//Review 
//Post Route
router.post("/",
isLoggedIn,
 validateReview,
 wrapAsync(reviewController.createReview));
   
   //Delete review Route
   router.delete("/:reviewId",
   isLoggedIn,
   isReviewAthour,
    wrapAsync(reviewController.destroyReview));
   
   module.exports = router;
   