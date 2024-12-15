import Logo from './assets/components/Logo';
import manEating from './assets/images/image-man-eating.webp';
import { Heading } from './assets/components/Headings';
import { Body } from './assets/components/Body';
import { HealthCards } from './assets/components/HealthCards';
import { LimitationsCards } from './assets/components/LimitationsCards';
import Calculator from './assets/components/Calculator';

export function App() {
	return (
		<main className='mx-auto flex max-w-5xl flex-col items-center justify-center font-inter'>
			<section className='rounded-b-[35px] bg-gradient-to-l from-[#d6e6fe8e] to-[#d6fcfe15] px-6 pb-64 lg:max-w-3xl lg:flex lg:flex-col lg:items-start lg:self-start'>
				<Logo width={'40px'} />
				<Heading level='1' className='lg:text-left lg:w-4/6'>
					body mass
					<br />
					index calculator
				</Heading>
				<Body size='base' className='text-center lg:text-left lg:w-4/6  '>
					Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI
					is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall
					health and well-being.
				</Body>
			</section>
			<Calculator />
			<div className='sm:flex sm:items-start sm:gap-2 lg:mb-12 lg:items-center'>
				<img
					className='mb-12 sm:mb-20 sm:aspect-auto sm:max-w-[40%] sm:-translate-x-10 lg:mb-0 lg:translate-x-0'
					src={manEating}
					alt='man smiling holding a sushi with chopsticks'
				/>
				<section className='px-6'>
					<Heading level='2'>What your BMI resuslt means</Heading>
					<Body className='mb-16 lg:mb-0'>
						A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your
						chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious
						diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for
						regular physical activity, ideally about 30 minutes daily for five days a week.
					</Body>
				</section>
			</div>
			<HealthCards />
			<section className='lg:grid-rows-auto mb-14 grid grid-cols-12 gap-8 px-6 pt-16 sm:gap-4'>
				<Heading level='2' className='col-span-12 text-center lg:col-span-6 lg:row-start-1 lg:text-left'>
					Limitations of BMI
				</Heading>
				<Body className='col-span-12 sm:text-center lg:col-span-6 lg:row-start-2 lg:text-left'>
					Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
					groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be
					beneficial to use.
				</Body>
				<LimitationsCards />
			</section>
		</main>
	);
}
