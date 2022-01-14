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

module.exports = { isPlainObject, makePairs, without };