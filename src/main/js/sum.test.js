/**
 * Created by user on 3/27/18.
 */
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});