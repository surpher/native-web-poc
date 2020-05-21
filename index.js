/**
 * Required External Modules
 */

const express = require("express");
const path = require("path");

/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || "8000";

/**
 *  App Configuration
 */

 app.set("views", path.join(__dirname, "views"));
 app.set("view engine", "pug");
 app.use(express.static(path.join(__dirname, "public")));

/**
 * Routes Definitions
 */

app.get("/", (req, res) => {
	res.render("index", { title: "Native-Web PoC"});
});

app.get("/authenticated", (req, res) => {
	res.render("authenticated", { title: "Profile", userProfile: { token: "web-app token" } });
});

/**
 * Server Activation
 */

app.listen(port, () => {
	console.log(`Listening to requests on ${port}`);
});






