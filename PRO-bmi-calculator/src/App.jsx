import Logo from './assets/components/Logo';
import manEating from './assets/images/image-man-eating.webp';
import { Heading } from './assets/components/Headings';
import { Body } from './assets/components/Body';
import { HealthCards } from './assets/components/HealthCards';
import { LimitationsCards } from './assets/components/LimitationsCards';
import Calculator from './assets/components/Calculator';

export function App() {
	return (
		<main className='flex flex-col items-center justify-center font-inter'>
			<section className='bg-gradient-to-l from-[#d6e6fe8e] to-[#d6fcfe15] px-6 rounded-b-[35px]'>
				<Logo width={'40px'} />
				<Heading level='1'>
					body mass
					<br />
					index calculator
				</Heading>
				<Body size='base' className='text-center'>
					Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI
					is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall
					health and well-being.
				</Body>
			</section>
				<Calculator />
			<img className='mb-12' src={manEating} alt='man smiling holding a sushi with chopsticks' />
			<section className='px-6'>
				<Heading level='2'>What your BMI resuslt means</Heading>
				<Body className='mb-16'>
					A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your
					chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet
					with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for
					regular physical activity, ideally about 30 minutes daily for five days a week.
				</Body>
			</section>
			<HealthCards />
			<section className='mb-14 px-6 pt-16'>
				<Heading level='2' className='text-center'>
					Limitations of BMI
				</Heading>
				<Body>
					Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
					groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be
					beneficial to use.
				</Body>
			</section>
			<LimitationsCards />
		</main>
	);
}
