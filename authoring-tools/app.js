var gui = require("nw.gui"),
	NeDB = require("nedb"),
	api = require("./authoring-api.js");

api.listen(1337);

var app = angular.module("AuthoringTools", ["ui.bootstrap"]);
