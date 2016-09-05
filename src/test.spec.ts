'use strict';

import * as chai from 'chai';
let expect = chai.expect;

import * as R from 'ramda-ts';

const add = (accum: number, value: number): number => {return accum + value};
const double = (x: number): number => { return x * 2 };
const isEven = (x: number): boolean => { return x % 2 === 0 };

describe('basic', () => {
    it('map', () => {
        let result = R.map(double, [1, 2, 3]);
        console.log(result);
        expect(result).to.deep.equal([2, 4, 6]);
    });

    it('filter', () => {
        let result = R.filter(isEven, [1, 2, 3, 4]);
        console.log(result);
        expect(result).to.deep.equal([2,4]);
    });

    it('reject', () => {
        let result = R.reject(isEven, [1, 2, 3, 4]);
        console.log(result);
        expect(result).to.deep.equal([1, 3]);
    });

    it('add', () => {
        let result = R.reduce(add, 5, [1,2,3,4]);
        console.log(result);
        expect(result).to.equal(15);
    });
});
