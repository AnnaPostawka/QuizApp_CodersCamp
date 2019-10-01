const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// fixing deprecation warnings
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);

	//connect to database
	const uri = process.env.DB_URI;
	if (!uri) throw new Error("Environmental variable DB_URI is missing.");

	mongoose
		.connect(uri)
		.then(() => console.log("Connected to database."))
		.catch(console.error);
});
