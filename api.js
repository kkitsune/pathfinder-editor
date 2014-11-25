var koa = require("koa"),
	Router = require("koa-router"),
	NeDB = require("nedb");

var api = module.exports = new Router();
api.db = new Object();
api.db.skills = new NeDB({
	filename: __dirname + "/database/skills.db",
	autoload: true
});
api.db.spells = new NeDB({
	filename: __dirname + "/database/spells.db",
	autoload: true
});
api.db.classes = new NeDB({
	filename: __dirname + "/database/classes.db",
	autoload: true
});
api.db.feats = new NeDB({
	filename: __dirname + "/database/feats.db",
	autoload: true
});
api.db.races = new NeDB({
	filename: __dirname + "/database/races.db",
	autoload: true
});

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
	api.db.skills.find({}, function (err, docs) {
		data.result = docs;
		data.error = err;
	});
	this.body = data;
});

api.get("/skill/:id", function * (next) {
	var id = this.params.id;
	var data = {};
	api.db.skills.findOne({
		_id: id
	}, function (err, doc) {
		data.result = doc;
		data.error = err;
	});
	this.body = data;
});
