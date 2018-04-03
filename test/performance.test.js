import { expect } from 'chai';
import Sample from '../dist/index';

describe('mainTest', () =>{
	let sample;
	beforeEach('instance initialize',() => {
		sample = new Sample();
	});

	it('Creation testing for Sample class\'s instance', function() {
		expect(sample instanceof Sample).to.equal(true);
	});


	// ----- Method test
	describe('run() and result() Test', function() {
		it('Answer Test', function() {
			expect(sample.run()).to.equal("Sample is working!");
		});
	});
	// ----- Method test End

});