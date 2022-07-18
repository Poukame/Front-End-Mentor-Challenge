
export default function Shortener({ onSubmit, onChange, value, savedLinks }) {
	
	return (
		<>
			<section className='shortener'>
				<div className='shorten-wrapper'>
					<form onSubmit={onSubmit}>
						<label for='longurl' hidden>Insert a long link in this field and click submit to shorten it</label>
						<input
							onChange={onChange}
							value={value}
							name='longurl'
							className='shorten__input'
							type='url'
							required
							placeholder='Shorten a link here...'
							id='longurl'
						></input>
						<button className='btn btn--short'>Shorten it!</button>
					</form>
				</div>
			</section>
			<div className='shortlink-container'>
				{savedLinks}
			</div>
		</>
	);
}
