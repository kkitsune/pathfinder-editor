var gui = require("nw.gui"),
	http = require("http"),
	api = require("./authoring-api.js");

var server = http.createServer(api.callback());
server.listen(1337);

gui.Window.get().on("close", function () {
	server.stop();
	this.close(true);
});

var app = angular.module("AuthoringTools", ["ui.bootstrap"]);
