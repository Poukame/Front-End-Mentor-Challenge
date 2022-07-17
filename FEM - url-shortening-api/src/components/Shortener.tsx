
export default function Shortener({ onSubmit, onChange, value, savedLinks }) {
	
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
				{savedLinks}
			</div>
		</>
	);
}
