var koa = require("koa"),
	serve = require("koa-static"),
	mount = require("koa-mount"),
	logger = require("koa-logger");

var app = koa().use(logger());
app.use(mount("/api", require("./api.js")));
app.use(serve(__dirname + "/html/"));

app.listen(1337);
