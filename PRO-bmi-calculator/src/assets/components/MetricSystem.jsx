import { useState, useEffect } from 'react';
import ResultDisplay from './ResultDisplay';

export default function MetricSystem({ unitSystem }) {
	const [heightField, setHeightField] = useState(null);
	const [weightField, setWeightField] = useState(null);

	const [debouncedHeight, setDebouncedHeight] = useState(null);
	const [debouncedWeight, setDebouncedWeight] = useState(null);

	useEffect(() => {
		const handler = setTimeout(() => {
			if (heightField && weightField) {
				setDebouncedHeight(heightField);
				setDebouncedWeight(weightField);
			}
		}, 1000);

		return () => {
			clearTimeout(handler);
		};
	}, [heightField, weightField]);

	return (
		<>
			<div className='sm:col-span-2 sm:row-start-3 sm:grid sm:grid-cols-subgrid sm:gap-6'>
				<div className='mx-auto sm:col-start-1 sm:w-full'>
					<label htmlFor='height' className='mb-3 block text-sm text-main-dark-blue'>
						Height
					</label>
					<div className='mb-6'>
						<div className='flex items-center justify-between rounded-xl bg-white px-6 py-5 text-2xl outline outline-1 -outline-offset-1 outline-main-dark-blue focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
							<input
								id='height-metric'
								name='height-metric'
								type='number'
								value={heightField}
								onChange={(e) => setHeightField(e.target.value)}
								placeholder='0'
								aria-describedby='height in centimeters'
								className='block min-w-0 font-semibold text-main-gunmetal [appearance:textfield] placeholder:text-gray-400 focus:outline focus:outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
							/>
							<div id='height-unit' className='shrink-1 select-none font-semibold tracking-tighter text-main-blue'>
								cm
							</div>
						</div>
					</div>
				</div>
				<div className='mx-auto sm:col-start-2 sm:w-full'>
					<label htmlFor='weight-metric' className='mb-3 block text-sm text-main-dark-blue'>
						Weight
					</label>
					<div className='mb-6'>
						<div className='flex items-center justify-between rounded-xl bg-white px-6 py-5 text-2xl outline outline-1 -outline-offset-1 outline-main-dark-blue focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
							<input
								id='weight-metric'
								name='weight-metric'
								type='number'
								value={weightField}
								onChange={(e) => setWeightField(e.target.value)}
								placeholder='0'
								aria-describedby='weight in kilos'
								className='block min-w-0 font-semibold text-main-gunmetal [appearance:textfield] placeholder:text-gray-400 focus:outline focus:outline-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
							/>
							<div id='height-unit' className='shrink-1 select-none font-semibold tracking-tighter text-main-blue'>
								kg
							</div>
						</div>
					</div>
				</div>
			</div>
			<ResultDisplay unitSystem={unitSystem} height={debouncedHeight} weight={debouncedWeight} />
		</>
	);
}
