function ShortLink() {
	return (
		<div className='shortlink-wrapper'>
			<div className='longlink'>https://beta.reactjs.org/learn/describing-the-ui</div>
			<div className='shortlink'>https://www.goo.gl</div>
			<button className='btn btn--shortlink'>Copy</button>
		</div>
	);
}

export default function Shortener() {
	return (
		<>
			<section className='shortener'>
				<div className='shorten-wrapper'>
					<input className='shorten__input' placeholder='Shorten a link here...'></input>
					<button className='btn btn--short'>Shorten it!</button>
				</div>
			</section>
			<div className='shortlink-container'>
				<ShortLink />
				<ShortLink />
			</div>
		</>
	);
}
