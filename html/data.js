var character = {
	name: "",
	alignment: "lawfulG",
	classes: "",
	size: 0,
	health: {
		max: 5,
		current: 5,
		nonlethal: 0
	}
};

var stat = {
	str: {
		score: 10,
		bonus: 0,
		mod: 0
	},
	dex: {
		score: 10,
		bonus: 0,
		mod: 0
	},
	con: {
		score: 10,
		bonus: 0,
		mod: 0
	},
	int: {
		score: 10,
		bonus: 0,
		mod: 0
	},
	wis: {
		score: 10,
		bonus: 0,
		mod: 0
	},
	cha: {
		score: 10,
		bonus: 0,
		mod: 0
	}
};

var inventory = {
	armor: {
		name: "",
		bonus: 0,
		penalty: 0,
		spellFailure: 0,
		enhancement: 0,
		maxDex: 0,
		special: ""
	},
	shield: {
		name: "",
		bonus: 0,
		penalty: 0,
		spellFailure: 0,
		enhancement: 0,
		maxDex: 0,
		special: ""
	}
};

var skills = [
	{
		name: "Acrobatics*",
		stat: "dex",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Appraise*",
		stat: "int",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Bluff*",
		stat: "cha",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Climb*",
		stat: "str",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Diplomacy*",
		stat: "cha",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Disable Device",
		stat: "dex",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Disguise*",
		stat: "cha",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Escape Artist*",
		stat: "dex",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Fly*",
		stat: "dex",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Handle Animal",
		stat: "cha",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Heal*",
		stat: "wis",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Intimidate*",
		stat: "cha",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Linguistics",
		stat: "int",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Perception*",
		stat: "wis",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Ride*",
		stat: "dex",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Sense Motive*",
		stat: "wis",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Sleight of Hand",
		stat: "dex",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Spellcraft",
		stat: "int",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Stealth*",
		stat: "dex",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Survival*",
		stat: "wis",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Swim*",
		stat: "str",
		classSkill: false,
		ranks: 0
	},
	{
		name: "Use Magic Device",
		stat: "cha",
		classSkill: false,
		ranks: 0
	}
];
