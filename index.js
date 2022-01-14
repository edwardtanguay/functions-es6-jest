// npm i jest -D
//1
// const data = { a: 1 };
const isPlainObject = (potentialObj) => {
	return typeof(potentialObj) === 'object' && !Array.isArray(potentialObj) && potentialObj !== null;
}
// console.log(isPlainObject(data)); // true
// console.log(isPlainObject({a: 2, b: 3})); // true
// console.log(isPlainObject([1,2,3]));
// console.log(isPlainObject('test'));
// console.log(isPlainObject(null));

module.exports = { isPlainObject };