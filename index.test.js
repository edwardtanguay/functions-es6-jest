const { expect, test } = require('@jest/globals');
const { isPlainObject, makePairs, without, isEmpty } = require('./index');

// 1
test('isPlainObject() is correctly implemented', () => {
	expect(isPlainObject({ a: 1 })).toBe(true);
	expect(isPlainObject({ a: 2, a: 3 })).toBe(true);
	expect(isPlainObject([1, 2, 3])).toBe(false);
	expect(isPlainObject(null)).toBe(false);
	expect(isPlainObject('ksjfskfjsdf')).toBe(false);
	expect(isPlainObject(12323)).toBe(false);
	expect(isPlainObject(false)).toBe(false);
	expect(isPlainObject(true)).toBe(false);
	expect(isPlainObject(undefined)).toBe(false);
	expect(isPlainObject([{ a: 1 }, { b: 2 }])).toBe(false);
	expect(isPlainObject({})).toBe(true);
});

// 2
test('makePairs() is correctly implemented', () => {
	expect(makePairs({ a: 1, b: 2 })).toStrictEqual([['a', 1], ['b', 2]]);
	expect(makePairs({})).toStrictEqual([]);
	expect(makePairs(null)).toStrictEqual([]);
});

// 3
test('without() is correctly implemented', () => {
	expect(without({ a: 1, b: 2 }, 'b')).toStrictEqual({ a: 1 });
	expect(without({ a: 1, b: 2 }, 'a')).toStrictEqual({ b: 2 });
	expect(without({ a: 1, b: 2 })).toStrictEqual({});
	expect(without()).toStrictEqual({});
});

// 4
test('isEmpty() is correctly implemented', () => {
	expect(isEmpty({})).toBe(false);
	expect(isEmpty({a: 1})).toBe(true);
});