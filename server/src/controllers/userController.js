const { User, validate } = require("../models/userModel");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const UserController = {
	async registerUser(req, res) {
		const { error } = validate(req.body);
		if (error) return res.status(400).send(error.details[0].message);

		let user = await User.findOne({ email: req.body.email });
		if (user) return res.status(400).send("User already registered.");

		user = new User(_.pick(req.body, ["email", "password"]));
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);

		try {
			await user.save();
			res.status(200).send(`User ${user.email} registered successfuly.`);
		} catch(e) {
			res.status(400).send("Registering new user failed.");
			console.log(e);
		}

	}
};

module.exports = UserController; 
