const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/budget";

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

/* Connect to the DB; Keeping this for now; useful for resetting database */
// mongoose.connect('mongodb://localhost/budget',function(){
//   mongoose.connection.db.dropDatabase();
// });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});