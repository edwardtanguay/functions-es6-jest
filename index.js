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
		keys.push([key,value]);
	}	
	return keys;
};

module.exports = { isPlainObject, makePairs };