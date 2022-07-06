import heroImg from '../images/illustration-working.svg';

export default function Hero() {
	return (
		<section className='hero'>
			<img className='hero__img' src={heroImg} alt='' />
			<h1 className='hero__title'>More than just shorter links</h1>
			<p className='hero__body'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
			<button className='hero__btn'>Get Started</button>
		</section>
	);
}
