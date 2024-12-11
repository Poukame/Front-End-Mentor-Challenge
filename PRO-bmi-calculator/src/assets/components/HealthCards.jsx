import { Heading } from './Headings';
import { Body } from './Body';
import eatingIcon from '../images/icon-eating.svg';
import exerciseIcon from '../images/icon-exercise.svg';
import sleepIcon from '../images/icon-sleep.svg';

export function HealthCards() {
	return (
		<section className='py-14 card-container grid grid-cols-1 grid-rows-3 gap-10 bg-gradient-to-l from-[#d6e6fe8e] to-[#d6fcfe15] px-6'>
			<div className='card'>
				<img src={eatingIcon} alt='' className='mb-8' />
				<Heading level='3'>Healthy Eating</Heading>
				<Body>
					Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and
					mood.
				</Body>
			</div>
			<div className='card'>
				<img src={exerciseIcon} alt='' className='mb-8' />
				<Heading level='3'>Regular excercise</Heading>
				<Body>
					Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness
					and longevity.
				</Body>
			</div>
			<div className='card'>
				<img src={sleepIcon} alt='' className='mb-8' />
				<Heading level='3'>Adequate Sleep</Heading>
				<Body>
					Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and
					rejuvenation.
				</Body>
			</div>
		</section>
	);
}
