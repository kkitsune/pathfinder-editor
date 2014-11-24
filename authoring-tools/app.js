var gui = require("nw.gui"),
	NeDB = require("nedb"),
	api = require("./authoring-api.js");

var app = angular.module("AuthoringTools", ["ui.bootstrap"]);
