const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);

app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);

  const uri = process.env.DB_URI;
  if (!uri) throw new Error("Environmental variable DB_URI is missing.");

  mongoose.set("useNewUrlParser", true);
  mongoose.set("useFindAndModify", false);
  mongoose.set("useCreateIndex", true);
  mongoose.set("useUnifiedTopology", true);

  mongoose
    .connect(uri)
    .then(() => console.log("Connected to database."))
    .catch(console.error);
});
