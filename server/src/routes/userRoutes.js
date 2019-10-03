const express = require("express");
const router = express.Router();
let User = require("../models/userModel");

router.use(express.json());

router.route("/").get((req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	const newUser = new User({ email, password });

	newUser
		.save()
		.then(() => res.json("New user added to the db."))
		.catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
