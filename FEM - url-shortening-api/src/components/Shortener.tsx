export default function Shortener() {
	return (
		<section className="shortener">
			<div className='shorten-wrapper'>
				<input className="shorten__input" placeholder='Shorten a link here...'></input>
				<button className="btn btn--short">Shorten it!</button>
			</div>
		</section>
	);
}
