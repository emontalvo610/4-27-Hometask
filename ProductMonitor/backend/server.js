const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");

require("dotenv").config();

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); /* bodyParser.urlencoded() is deprecated */

const db = require("./app/models");
db.sequelize.sync();
// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  console.log("Welcome server!");
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/product.routes")(app);

// set port, listen for requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log("HOST->>>>>", process.env.HOST);
  console.log(`Server is running on port ${PORT}.`);
});
