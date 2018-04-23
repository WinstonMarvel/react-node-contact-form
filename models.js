const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var formSubmissionSchema = new Schema({
	name : String,
	gender: Boolean,
	phone: Number,
	email: String,
	message: String
});

var formSubmissionModel = mongoose.model("submission", formSubmissionSchema);

module.exports = formSubmissionModel; 