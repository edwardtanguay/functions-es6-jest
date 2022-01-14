// npm init -y
// npm i jest -D

//1
const isPlainObject = (potentialObj) => {
	return typeof (potentialObj) === 'object' && !Array.isArray(potentialObj) && potentialObj !== null;
}

module.exports = { isPlainObject };