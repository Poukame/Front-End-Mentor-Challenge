import { useState, useEffect } from 'react';
import ResultDisplay from './ResultDisplay';
import { feetToInches, stonesToPounds } from '../utils/BMIcalculation';

export default function ImperialSystem({ unitSystem }) {
	const [heightFieldFeet, setHeightFieldFeet] = useState(null);
	const [heightFieldInch, setHeightFieldInch] = useState(null);
	const [weightFieldStone, setWeightFieldStone] = useState(null);
	const [weightFieldPounds, setWeightFieldPounds] = useState(null);

	const [debouncedHeight, setDebouncedHeight] = useState(null);
	const [debouncedWeight, setDebouncedWeight] = useState(null);

	useEffect(() => {
		const handler = setTimeout(() => {
			if (weightFieldStone && weightFieldPounds) {
				const weightInPounds = stonesToPounds(weightFieldStone, weightFieldPounds);
				setDebouncedWeight(weightInPounds);
			}
			if (heightFieldFeet && heightFieldInch) {
				const heightInInches = feetToInches(heightFieldFeet, heightFieldInch);
				setDebouncedHeight(heightInInches);
			}
		}, 1000);

		return () => {
			clearTimeout(handler);
		};
	}, [heightFieldFeet, heightFieldInch, weightFieldStone, weightFieldPounds]);

	return (
		<div className='sm:col-span-2 sm:row-start-3 sm:grid sm:grid-cols-subgrid sm:grid-rows-2'>
			<div className='mx-auto sm:col-span-2'>
				<label htmlFor='height' className='mb-3 block text-sm text-main-dark-blue'>
					Height
				</label>
				<div className='flex gap-4'>
					<div className='mb-6'>
						<div className='flex items-center justify-between rounded-xl bg-white px-6 py-5 text-2xl outline outline-1 -outline-offset-1 outline-main-dark-blue focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
							<input
								id='height-imperial-feet'
								name='height-imperial-feet'
								type='number'
								value={heightFieldFeet}
								onChange={(e) => setHeightFieldFeet(e.target.value)}
								placeholder='0'
								aria-describedby='height in feet'
								className='block w-1/2 min-w-0 font-semibold text-main-gunmetal placeholder:text-gray-400 focus:outline focus:outline-0'
							/>
							<div id='height-unit' className='shrink-1 select-none font-semibold tracking-tighter text-main-blue'>
								ft
							</div>
						</div>
					</div>
					<div className='mb-6'>
						<div className='flex items-center justify-between rounded-xl bg-white px-6 py-5 text-2xl outline outline-1 -outline-offset-1 outline-main-dark-blue focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
							<input
								id='height-imperial-inches'
								name='height-imperial-inches'
								type='number'
								value={heightFieldInch}
								onChange={(e) => setHeightFieldInch(e.target.value)}
								placeholder='0'
								aria-describedby='height in inches'
								className='block w-1/2 min-w-0 font-semibold text-main-gunmetal placeholder:text-gray-400 focus:outline focus:outline-0'
							/>
							<div id='height-unit' className='shrink-1 select-none font-semibold tracking-tighter text-main-blue'>
								in
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='mx-auto sm:col-span-2'>
				<label htmlFor='weight-metric' className='mb-3 block text-sm text-main-dark-blue'>
					Weight
				</label>
				<div className='flex gap-4'>
					<div className='mb-6'>
						<div className='flex items-center justify-between rounded-xl bg-white px-6 py-5 text-2xl outline outline-1 -outline-offset-1 outline-main-dark-blue focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
							<input
								id='height-imperial-stones'
								name='height-imperial-stones'
								type='number'
								value={weightFieldStone}
								onChange={(e) => setWeightFieldStone(e.target.value)}
								placeholder='0'
								aria-describedby='height in stones'
								className='block w-1/2 min-w-0 font-semibold text-main-gunmetal placeholder:text-gray-400 focus:outline focus:outline-0'
							/>
							<div id='height-unit' className='shrink-1 select-none font-semibold tracking-tighter text-main-blue'>
								st
							</div>
						</div>
					</div>
					<div className='mb-6'>
						<div className='flex items-center justify-between rounded-xl bg-white px-6 py-5 text-2xl outline outline-1 -outline-offset-1 outline-main-dark-blue focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600'>
							<input
								id='height-imperial-pounds'
								name='height-imperial-pounds'
								type='number'
								value={weightFieldPounds}
								onChange={(e) => setWeightFieldPounds(e.target.value)}
								placeholder='0'
								aria-describedby='height in pounds'
								className='block w-1/2 min-w-0 font-semibold text-main-gunmetal placeholder:text-gray-400 focus:outline focus:outline-0'
							/>
							<div id='height-unit' className='shrink-1 select-none font-semibold tracking-tighter text-main-blue'>
								lbs
							</div>
						</div>
					</div>
				</div>
			</div>
			<ResultDisplay unitSystem={unitSystem} height={debouncedHeight} weight={debouncedWeight} />
		</div>
	);
}
