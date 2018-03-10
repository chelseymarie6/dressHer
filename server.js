const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./models");


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(require("./routes"))


if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
} else {
app.use(express.static(__dirname + "/client/public"));
}
// Start the API server

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});