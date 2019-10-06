const config = require("config");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 255,
			unique: true
		},
		password: {
			type: String,
			required: true,
			minlength: 5,
			maxlength: 255
		}
	},
	{
		timestamps: true
	}
);

userSchema.methods.generateAuthToken = function() {
	const token = jwt.sign({ _id: this._id }, config.get("jwtPrivateKey"));
	return token;
};

const User = mongoose.model("User", userSchema);

function validate(user) {
	const schema = {
		email: Joi.string()
			.min(5)
			.max(255)
			.required()
			.email(),
		password: Joi.string()
			.min(5)
			.max(255)
			.required()
	};

	return Joi.validate(user, schema);
}

module.exports.User = User;
module.exports.validate = validate;
