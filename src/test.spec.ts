'use strict';

import * as chai from 'chai';
let expect = chai.expect;

import * as R from 'ramda-ts';

describe('basic', () => {
    it('1', () => {
        let result;

        const double = (x: number) => { return x * 2 };
        result = R.map(double, [1, 2, 3]);
        console.log(result);
        expect(result).to.deep.equal([2, 4, 6]);

        const isEven = (x: number) => { return x % 2 === 0 };
        result = R.filter(isEven, [1, 2, 3, 4]);
        console.log(result);
        expect(result).to.deep.equal([2,4]);

        result = R.reject(isEven, [1, 2, 3, 4]);
        console.log(result);
        expect(result).to.deep.equal([1,3]);
    });
});
