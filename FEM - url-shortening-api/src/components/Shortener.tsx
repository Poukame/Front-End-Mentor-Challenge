function ShortLink() {
	return (
		<div className='shortlink-wrapper'>
			<div className='longlink'>https://beta.reactjs.org/learn/describing-the-ui</div>
			<div className='shortlink'>https://www.goo.gl</div>
			<button className='btn btn--shortlink'>Copy</button>
		</div>
	);
}

export default function Shortener({ onSubmit, onChange, value, shortLink }) {
	return (
		<>
			<section className='shortener'>
				<div className='shorten-wrapper'>
					<form onSubmit={onSubmit}>
						<input
							onChange={onChange}
							value={value}
							name='longurl'
							className='shorten__input'
							type='url'
							required
							placeholder='Shorten a link here...'
						></input>
						<button className='btn btn--short'>Shorten it!</button>
					</form>
				</div>
			</section>
			<div className='shortlink-container'>
				<ShortLink />
				{shortLink}
				<ShortLink />
			</div>
		</>
	);
}
