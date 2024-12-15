import { Heading } from './Headings';
import { Body } from './Body';
import eatingIcon from '../images/icon-eating.svg';
import exerciseIcon from '../images/icon-exercise.svg';
import sleepIcon from '../images/icon-sleep.svg';

export function HealthCards() {
	return (
		<section className='card-container grid grid-cols-1 gap-10 bg-gradient-to-l from-[#d6e6fe8e] to-[#d6fcfe15] px-6 py-14 lg:grid-cols-3'>
			<div className='card lg:grid-rows-[80px_50px_1fr] sm:grid sm:grid-cols-12 sm:grid-rows-2 lg:gap-4'>
				<img
					src={eatingIcon}
					alt=''
					className='mb-8 sm:col-span-2 sm:row-span-2 sm:mb-0 sm:place-self-center lg:col-span-12 lg:row-span-1 lg:place-self-start'
				/>
				<Heading level='3' className='sm:col-span-10 sm:row-span-1 sm:self-end lg:row-span-1'>
					Healthy Eating
				</Heading>
				<Body className='sm:col-span-10 sm:row-span-2 lg:row-span-1'>
					Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and
					mood.
				</Body>
			</div>
			<div className='card lg:grid-rows-[80px_50px_1fr] sm:grid sm:grid-cols-12 sm:grid-rows-2 lg:gap-4'>
				<img
					src={exerciseIcon}
					alt=''
					className='mb-8 sm:col-span-2 sm:row-span-2 sm:mb-0 sm:place-self-center lg:col-span-12 lg:row-span-1 lg:place-self-start'
				/>
				<Heading level='3' className='sm:col-span-10 sm:row-span-1 sm:self-end lg:row-span-1'>
					Regular excercise
				</Heading>
				<Body className='sm:col-span-10 sm:row-span-2 lg:row-span-1'>
					Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness
					and longevity.
				</Body>
			</div>
			<div className='card lg:grid-rows-[80px_50px_1fr] sm:grid sm:grid-cols-12 sm:grid-rows-2 lg:gap-4'>
				<img
					src={sleepIcon}
					alt=''
					className='mb-8 sm:col-span-2 sm:row-span-2 sm:mb-0 sm:place-self-center lg:col-span-12 lg:row-span-1 lg:place-self-start'
				/>
				<Heading level='3' className='sm:col-span-10 sm:row-span-1 sm:self-end lg:row-span-1'>
					Adequate Sleep
				</Heading>
				<Body className='sm:col-span-10 sm:row-span-2 lg:row-span-1'>
					Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and
					rejuvenation.
				</Body>
			</div>
		</section>
	);
}
