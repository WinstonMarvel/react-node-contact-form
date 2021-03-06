const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const submission = require('./models.js');

var db = mongoose.connect("mongodb://localhost:27017/submission", (err)=>{
	if(err)
		throw err;
	else
		console.log("sucess");
});


// var test_submission = new submission({
// 	name : "Winston",
// 	gender: true,
// 	phone: 89007,
// 	email: "stromg@ds.cpo",
// 	message: "test string"
// 	});


router.route("/api/")

.get((req,res)=>{
	submission.find((err, submissions)=>{
		res.json(submissions);
	});
})

.post((req,res)=>{
	console.info(req.body);
	submission.create(req.body, (err)=> {
		try{
			if(err){
				console.log("ERROR");
				throw err;
			}
			res.json({success: true});
		}
		catch(error){
			console.error("Error in contact form");
			res.json({success: false});
		}
	});
})

module.exports = router;








