const path = require("path");

const express = require("express");
const cors = require('cors',{origin:true});

//database import
const db = require("./data/database");
//routes imports
const baseRoutes = require('./routes/base.routes');
const visitorRoutes = require('./routes/visitor.routes');
//middlewares imports
const enableCors = require('./middlewares/cors');

//development and production env
let port = 3000;

if (process.env.PORT) {
  port = process.env.PORT
}

const app = express();

//cors
app.use(cors());
app.use(enableCors);

//template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//request format and paths
app.use(express.static("public"));
//temp image asset folder
/* app.use('/projects/assets/', express.static('images')); */
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//routes
app.use(baseRoutes);
app.use(visitorRoutes);

//database connection
db.connectToDatabase()
  .then(function () {
    app.listen(port);
  })
  .catch(function (err) {
    console.log('failed to connect to database!');
    console.log(err);
  });
