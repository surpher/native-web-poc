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

app.get("/back_to_app", (req, res) => {
	let action = req.query.action;
	res.render("back_to_app", { title: "Back to app page with banner", data: { info: action } });
});

app.get("/authenticated", (req, res) => {
	res.render("authenticated", { title: "Profile", userProfile: { info: "some info string" } });
});

app.get("/profile", (req, res) => {
	res.render("profile", { title: "User Profile"});
});

app.get("/integration", (req, res) => {
	res.render("integration", { title: "Integration"});
});

app.get("/new_product", (req, res) => {
	res.render("new_product", { title: "New Product"});
});

// Based on https://developer.apple.com/documentation/safariservices/supporting_associated_domains_in_your_app
// JSON should be in /.well-known/apple-app-site-association file
app.get("/apple-app-site-association", (req, res) => {
	res
		.status(200)
		.type('json')
		.send(`{"applinks":{"apps":[],"details":[{"appID":"4L73KZWFMS.com.ittybittyapps.anz-x.demo.NativeWeb","paths":["/back_to_app"]}]}}`);
		// .send(`{"applinks":{"details":[{"appIDs":["4L73KZWFMS.com.ittybittyapps.anz-x.demo.NativeWeb"],"components":[{"/":"/back_to_app/*","comment":"Matches any url that starts with /back_to_app/"}]}]}}`);
		// .send(`{"applinks":{"apps":[],"details":[{"appID":"4L73KZWFMS.com.ittybittyapps.anz-x.demo.NativeWeb","paths":["/back_to_app/*"]}]}}`);
});

app.get("/.well-known/apple-app-site-association", (req, res) => {
	res
		.status(200)
		.type('json')
		.send(`{"applinks":{"apps":[],"details":[{"appID":"4L73KZWFMS.com.ittybittyapps.anz-x.demo.NativeWeb","paths":["/back_to_app"]}]}}`);
		// .send(`{"applinks":{"details":[{"appIDs":["4L73KZWFMS.com.ittybittyapps.anz-x.demo.NativeWeb"],"components":[{"/":"/back_to_app/*","comment":"Matches any url that starts with /back_to_app/"}]}]}}`);
		// .send(`{"applinks":{"apps":[],"details":[{"appID":"4L73KZWFMS.com.ittybittyapps.anz-x.demo.NativeWeb","paths":["/back_to_app/*"]}]}}`);
});

/**
 * Server Activation
 */

app.listen(port, () => {
	console.log(`Listening to requests on ${port}`);
});
