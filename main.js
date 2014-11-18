var koa = require("koa"),
	serve = require("koa-static"),
	mount = require("koa-mount"),
	route = require("koa-router"),
	NeDB = require("nedb");

var app = koa();
app.use(serve(__dirname + "/html/"));

app.listen(1337);