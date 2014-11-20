var app = angular.module("Pathfinder", ["ui.bootstrap"]);

app.controller("CharacterController", function ($scope, $rootScope, $modal) {
	$rootScope.character = {
		name: function (value) {
			if (angular.isDefined(value))
				character.name = value;
			return character.name;
		},
		alignment: function (value) {
			if (angular.isDefined(value))
				character.alignment = value;
			return character.alignment;
		},
		classes: function (value) {
			if (angular.isDefined(value))
				character.classes = value;
			return character.classes;
		},
		size: function () {
			return character.size;
		}
	};

	$scope.showJournal = function () {
		$modal.open({
			templateUrl: "modals/journal.html",
			size: "lg"
		});
	};

	$scope.showRace = function () {
		$modal.open({
			templateUrl: "modals/race.html",
			size: "lg"
		});
	};

	$scope.showDeity = function () {
		$modal.open({
			templateUrl: "modals/deity.html",
			size: "lg"
		});
	};
});

app.controller("ClassController", function ($scope, $rootScope, $modal) {
	$scope.manageClass = function () {
		$modal.open({
			templateUrl: "modals/classManager.html",
			size: "lg"
		});
	};
});

app.controller("StatController", function ($scope, $rootScope) {
	$rootScope.stat = {
		str: function (value) {
			if (angular.isDefined(value))
				stat.str.score = value;
			return stat.str.score;
		},
		strBonus: function () {
			return stat.str.bonus;
		},
		strMod: function () {
			stat.str.mod = Math.floor((stat.str.score + stat.str.bonus - 10) / 2);
			return stat.str.mod;
		},

		dex: function (value) {
			if (angular.isDefined(value))
				stat.dex.score = value;
			return stat.dex.score;
		},
		dexBonus: function () {
			return stat.dex.bonus;
		},
		dexMod: function () {
			stat.dex.mod = Math.floor((stat.dex.score + stat.dex.bonus - 10) / 2);
			return stat.dex.mod;
		},

		con: function (value) {
			if (angular.isDefined(value))
				stat.con.score = value;
			return stat.con.score;
		},
		conBonus: function () {
			return stat.con.bonus;
		},
		conMod: function () {
			stat.con.mod = Math.floor((stat.con.score + stat.con.bonus - 10) / 2);
			return stat.con.mod;
		},

		int: function (value) {
			if (angular.isDefined(value))
				stat.int.score = value;
			return stat.int.score;
		},
		intBonus: function () {
			return stat.int.bonus;
		},
		intMod: function () {
			stat.int.mod = Math.floor((stat.int.score + stat.int.bonus - 10) / 2);
			return stat.int.mod;
		},

		wis: function (value) {
			if (angular.isDefined(value))
				stat.wis.score = value;
			return stat.wis.score;
		},
		wisBonus: function () {
			return stat.wis.bonus;
		},
		wisMod: function () {
			stat.wis.mod = Math.floor((stat.wis.score + stat.wis.bonus - 10) / 2);
			return stat.wis.mod;
		},

		cha: function (value) {
			if (angular.isDefined(value))
				stat.cha.score = value;
			return stat.cha.score;
		},
		chaBonus: function () {
			return stat.cha.bonus;
		},
		chaMod: function () {
			stat.cha.mod = Math.floor((stat.cha.score + stat.cha.bonus - 10) / 2);
			return stat.cha.mod;
		}
	}
});

app.controller("ArmorClassController", function ($scope, $rootScope) {
	$rootScope.ac = {
		base: function () {
			return 10 + stat.dex.mod + inventory.armor.bonus + inventory.armor.enhancement + inventory.shield.bonus + inventory.shield.enhancement + character.size;
		},
		touch: function () {
			return 10 + stat.dex.mod + character.size;
		},
		flatfooted: function () {
			return 10 + inventory.armor.bonus + inventory.armor.enhancement + inventory.shield.bonus + inventory.shield.enhancement + character.size;
		}
	};
});

app.controller("CombatManeuverController", function ($scope, $rootScope) {
	$rootScope.cm = {
		baseDef: function () {
			return 10 + 0 + stat.str.mod + stat.dex.mod + character.size;
		},
		flatfootedDef: function () {
			return 10 + 0 + stat.str.mod + character.size;
		},
		bonus: function () {
			return 0 + stat.str.mod + character.size;
		}
	};
});

app.controller("AttackBonus", function ($scope, $rootScope) {
	$rootScope.atkBonus = {
		base: function () {
			return 0;
		},
		melee: function () {
			return stat.str.mod;
		},
		ranged: function () {
			return stat.dex.mod;
		}
	};
});

app.controller("GearController", function ($scope, $rootScope, $modal) {
	$rootScope.health = character.health;

	$rootScope.armor = {
		name: function () {
			return inventory.armor.name;
		},
		bonus: function () {
			return inventory.armor.bonus + inventory.armor.enhancement;
		},
		penalty: function () {
			return inventory.armor.penalty;
		},
		failure: function () {
			return inventory.armor.spellFailure;
		},
		maxDex: function () {
			return inventory.armor.maxDex;
		},
		special: function () {
			return inventory.armor.special;
		}
	};

	$rootScope.shield = {
		name: function () {
			return inventory.shield.name;
		},
		bonus: function () {
			return inventory.shield.bonus + inventory.shield.enhancement;
		},
		penalty: function () {
			return inventory.shield.penalty;
		},
		failure: function () {
			return inventory.shield.spellFailure;
		},
		maxDex: function () {
			return inventory.shield.maxDex;
		},
		special: function () {
			return inventory.shield.special;
		}
	};

	$scope.showHealth = function () {
		$modal.open({
			templateUrl: "modals/health.html",
			size: "lg"
		});
	};

	$scope.showArmor = function () {
		$modal.open({
			templateUrl: "modals/armor.html",
			size: "lg"
		});
	};

	$scope.showShield = function () {
		$modal.open({
			templateUrl: "modals/shield.html",
			size: "lg"
		});
	};
});

app.controller("SkillController", function ($scope, $rootScope, $modal) {
	$rootScope.skills = skills;

	$scope.getStat = function (skill) {
		switch (skill.stat) {
		case "str":
			return stat.str.mod;
		case "dex":
			return stat.dex.mod;
		case "con":
			return stat.con.mod;
		case "int":
			return stat.int.mod;
		case "wis":
			return stat.wis.mod;
		case "cha":
			return stat.cha.mod;
		}
	};

	$scope.getTotal = function (skill) {
		return $scope.getStat(skill) + skill.ranks + (skill.classSkill && skill.ranks > 0 ? 3 : 0);
	};

	$scope.showSkills = function () {
		$modal.open({
			templateUrl: "modals/skills.html",
			size: "lg"
		});
	};
});
