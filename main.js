var koa = require("koa"),
	serve = require("koa-static"),
	mount = require("koa-mount"),
	router = require("koa-router"),
	logger = require("koa-logger"),
	NeDB = require("nedb");

var db = new Object();
db.skills = new NeDB({
	filename: __dirname + "/database/skills.db",
	autoload: true
});
db.spells = new NeDB({
	filename: __dirname + "/database/spells.db",
	autoload: true
});
db.classes = new NeDB({
	filename: __dirname + "/database/classes.db",
	autoload: true
});
db.feats = new NeDB({
	filename: __dirname + "/database/feats.db",
	autoload: true
});
db.races = new NeDB({
	filename: __dirname + "/database/races.db",
	autoload: true
});

var api = koa();
api.use(router(api));

api.get("/", function * (next) {
	this.body = {
		version: "0.1.0",
		databases: [
			"skills",
			"spells",
			"classes",
			"feats",
			"races"
		]
	}
});

api.get("/skill", function * (next) {
	var data = {};
	db.skills.find({}, function (err, docs) {
		data.result = docs;
		data.error = err;
	});
	this.body = data;
});

api.get("/skill/:id", function * (next) {
	var id = this.params.id;
	var data = {};
	db.skills.findOne({
		_id: id
	}, function (err, doc) {
		data.result = doc;
		data.error = err;
	});
	this.body = data;
});

var app = koa().use(logger());
app.use(mount("/api", api));
app.use(serve(__dirname + "/html/"));

app.listen(1337);
