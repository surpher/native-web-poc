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

app.get("/profile", (req, res) => {
	res.render("profile", { title: "User Profile"});
});

app.get("/integration", (req, res) => {
	res.render("integration", { title: "Integration"});
});

app.get("/apple-app-site-association", (req, res) => {
	res.status(200).send(`{“applinks”:{“apps”:[],“details”:[{“appID”:"PW6SVJ25U7.com.ittybittyapps.anz.x.demo.NativeWeb”,“paths”:[“*”],}]}}`);
});

/**
 * Server Activation
 */

app.listen(port, () => {
	console.log(`Listening to requests on ${port}`);
});






