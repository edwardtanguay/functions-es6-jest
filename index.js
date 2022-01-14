// npm init -y
// npm i jest -D

// 1
const isPlainObject = (potentialObj) => {
	return typeof (potentialObj) === 'object' && !Array.isArray(potentialObj) && potentialObj !== null;
}

// 2
const makePairs = (obj) => {
	if (obj === null) return [];
	// return Object.entries(obj); // not available in specified version
	const keys = [];
	for (const key in obj) {
		const value = obj[key];
		keys.push([key, value]);
	}
	return keys;
};

// 3
const without = (obj, prop) => {
	// if (obj === undefined) return {};
	// const retObj = {};
	// const items = Object.entries(obj); 
	// items.forEach(item => {
	// 	const key = item[0];
	// 	const value = item[1];
	// 	if (key !== prop) {
	// 		retObj[key] = value;
	// 	}
	// });
	// return retObj;
	if (isPlainObject(obj) && prop !== undefined) {
		return Object
			.keys(obj)
			.reduce((newObj, key) => {
				if (key !== prop) {
					newObj[key] = obj[key]
				}
				return newObj
			}, {});
	}
	return {};
};

// 4
// const isEmpty = (obj) => {
// 	const values = Object.values(obj);
// 	console.log('>>>', values);
// 	const mapvar = Object.values(obj).map(el => el !== undefined);
// 	console.log('>>>', mapvar);
// 	const filtervar = Object.values(obj).map(el => el !== undefined).filter(el => el).length > 0;
// 	console.log('>>>', filtervar);
// 	return !(Object
// 		.values(obj).length > 0
// 		&&
// 		Object
// 			.values(obj) // [undefined]
// 			.map(el => el !== undefined) // [false]
// 			.filter(el => el).length > 0) // array is empty since "false" values not included 
// };

// 4
const isEmpty = (obj) => {
	return !(Object
		.values(obj).length > 0
		&&
		Object
			.values(obj)
			.filter(el => el !== undefined).length > 0);
};

module.exports = { isPlainObject, makePairs, without, isEmpty };