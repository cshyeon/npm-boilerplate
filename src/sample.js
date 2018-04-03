"use strict";

class Sample {
	constructor() {
		this.msg = "Sample is working!";
	}

	run() {
		console.log(this.msg);
		return this.msg;
	}

}

module.exports =  Sample;