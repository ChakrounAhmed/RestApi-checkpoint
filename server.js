const express = require("express");
const mongoose = require("mongoose");

//Config .env
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const app = express();
app.use(express.json());

//! connect database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

//! Routes
app.use("/api", require("./routes/userRoutes"));

//Port config
const port = process.env.PORT;

//! start the server
app.listen(port, (err) => {
  err ? console.log(err) : console.log("listening on port", port);
});
