
const express = require("express");
const basicAuth = require("express-basic-auth");
const path = require("path");
const app = express();

app.use(
	basicAuth({
		challenge: true,
		users: { cranach: "meisterwerke" },
	})
);

app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));

// add middlewares
app.use((req, res, next) => {
	res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});

// start express server on port 9000
app.listen(9000, () => {
	console.log("server started on port 9000");
});
