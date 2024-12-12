import { calcBMI, findBMIRange, calcHealthWeightRange, poundsToStones } from '../utils/BMIcalculation';

export default function ResultDisplay({ unitSystem = 'metric', height, weight }) {
	const BMI = calcBMI(unitSystem, height, weight);
	const BMIrange = findBMIRange(BMI);
	const healthyRangeMin = calcHealthWeightRange(unitSystem, height)[0];
	const healthyRangeMax = calcHealthWeightRange(unitSystem, height)[1];

	const healthyRangeMinStones = poundsToStones(healthyRangeMin)[0];
	const healthyRangeMinPounds = poundsToStones(healthyRangeMin)[1];
	const healthyRangeMaxStones = poundsToStones(healthyRangeMax)[0];
	const healthyRangeMaxPounds = poundsToStones(healthyRangeMax)[1];

	const promptMessage = (
		<div>
			<span className='mb-4 inline-block text-4xl font-semibold'>Welcome!</span>
			<p>Enter your height and weight and you’ll see your BMI result here</p>
		</div>
	);

	const resultMessage = (
		<div className='sm:grid sm:grid-cols-2'>
			<p>
				Your BMI is...<br></br>
				<span className='text-4xl font-semibold'>{BMI}</span>
				<br></br>
			</p>
			<p>
				Your BMI suggests you’re a {BMIrange}. Your ideal weight is between{' '}
				<strong>
					{unitSystem === 'metric'
						? `${healthyRangeMin}kgs - ${healthyRangeMax}kgs`
						: `${healthyRangeMinStones}st ${healthyRangeMinPounds}lbs - ${healthyRangeMaxStones}st ${healthyRangeMaxPounds}lbs`}
				</strong>
			</p>
		</div>
	);

	return (
		<div className='rounded-xl bg-main-blue p-8 text-white sm:col-span-2 sm:row-start-4 sm:row-end-5 sm:rounded-r-full'>
			{height && weight ? resultMessage : promptMessage}
		</div>
	);
}
