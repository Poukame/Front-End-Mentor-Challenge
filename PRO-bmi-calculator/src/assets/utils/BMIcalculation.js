function calcBMI(unitSystem = 'metric', height, weight) {
    if (unitSystem === 'imperial') {
		return (((weight * 703) / Math.pow(height, 2))).toFixed(1);
	}

	if (unitSystem === 'metric') {
		return ((weight / Math.pow(height, 2)) * 10000).toFixed(1);
	}
}

function feetToInches(feet, inches) {
    return +feet * 12 + +inches;
}

function stonesToPounds(stones, pounds) {
    return +stones * 14 + +pounds;
}

function poundsToStones(pounds) {
    return [Math.floor(pounds/14), Math.round(pounds%14)]
}

function calcHealthWeightRange(unitSystem, height) {
    if(unitSystem === 'imperial') {
        const minRange = ((18.5 * Math.pow(height, 2)) / 703).toFixed(1);
        const maxRange = ((24.9 * Math.pow(height, 2)) / 703).toFixed(1);
        return [minRange, maxRange];
    }

    if(unitSystem === 'metric') {
        const minRange = ((18.5 * Math.pow(height, 2)) / 10000).toFixed(1);
        const maxRange = ((24.9 * Math.pow(height, 2)) / 10000).toFixed(1);
        return [minRange, maxRange];
    }  
}

const ranges = [
	{
		zone: 'underweight',
		max: 18.5
	},
	{
		zone: 'healthy weight',
		max: 24.9
	},
	{
		zone: 'overweight',
		max: 29.9
	},
	{
		zone: 'obese',
		max: Infinity
	}
];

function findBMIRange(BMI) {
	return ranges.reduce((result, range) => {
		if (result) {
			return result;
		} else if (BMI <= range.max) {
			return range.zone;
		} else {
			return null;
		}
	}, null);
}

export { findBMIRange, calcBMI, calcHealthWeightRange, feetToInches, stonesToPounds, poundsToStones };
