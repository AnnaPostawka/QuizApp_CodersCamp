const _ = require("lodash");
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/userModel");

async function registerUser(req, res) {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (user) return res.status(400).send("User already registered.");

	user = new User(_.pick(req.body, ["email", "password"]));
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(user.password, salt);

	try {
		await user.save();
		const token = user.generateAuthToken();
		res
			.header("x-auth-token", token)
			.status(200)
			.send(`User ${user.email} registered successfuly.`);
	} catch (e) {
		res.status(400).send("Registering new user failed.");
		console.log(e);
	}
}

async function loginUser(req, res) {
	const { error } = validate(req.body);
	if (error) return res.status(400).send(error.details[0].message);

	let user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send("Invalid email or password.");

	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send("Invalid email or password.");

	const token = user.generateAuthToken();
	res.send(token);
}

/*
async function getUserInfo(req, res) {
	const user = await User.findById(req.user._id).select("-password");
	res.send(user);
}

module.exports.getUserInfo = getUserInfo;
*/

module.exports.registerUser = registerUser;
module.exports.loginUser = loginUser;
