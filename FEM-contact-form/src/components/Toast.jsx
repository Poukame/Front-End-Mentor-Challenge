import iconSuccess from '../assets/images/icon-success-check.svg'

export default function Toast({ firstname, display }) {
	return (
		display && (
			<div aria-live="polite" role="alert" className='transition ease-in-out delay-150 absolute w-3/4 lg:w-1/2 xl:w-1/3 top-0 left-0 right-0 mx-auto mt-4 p-4 rounded-lg bg-green-700 text-white flex flex-col gap-2'>
				<div className='flex gap-2'>
				<img src={iconSuccess} alt="Success Icon" />
					<p className='font-bold'>Message Sent!</p>
				</div>
				<div>
					<p>Thanks {firstname} for completing the form. We’ll be in touch soon!</p>
				</div>
			</div>
		)
	);
}
