import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import Toast from './components/Toast';

const SignupSchema = Yup.object().shape({
	firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('This field is required'),
	lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('This field is required'),
	email: Yup.string().email('Invalid email').required('Please enter a valid email address'),
	message: Yup.string().required('This field is required'),
	queryType: Yup.string().required('Please select a query type'),
	toggle: Yup.boolean().oneOf([true], 'To submit this form, please consent to being contacted').required('required'),
});

function App() {
	const [formData, setFormData] = useState({});
	const [displayToast, setDisplayToast] = useState(false);

	const fieldStyle =
		'mt-2 border rounded-lg border-gray-500 active:border-t-green-600 focus:border-t-green-600 hover:border-t-green-600 hover:border-x-green-200 hover:border-b-green-200 px-4 py-1 text-gray-900 hover:cursor-pointer';
	const labelStyle = 'text-gray-600 text-sm mt-4';
	const errorStyle = 'text-red-500 text-sm mt-2';

	return (
		<div className='max-w-screen-md flex flex-col mx-auto shadow-md p-6 lg:p-8 bg-white rounded-xl'>
			<h1 className='text-2xl font-bold mb-4'>Contact Us</h1>
			<Toast firstname={formData.firstName} display={displayToast} />
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					email: '',
					queryType: '',
					message: '',
					toggle: false,
				}}
				validationSchema={SignupSchema}
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 500));
					setFormData(values);
					setDisplayToast((prev) => !prev);
					setTimeout(() => {
						setDisplayToast((prev) => !prev);
					}, 3000);
				}}
			>
				{({ errors }) => (
					<Form className='flex flex-col'>
						<label className={labelStyle} htmlFor='firstName'>
							First Name *
						</label>
						<Field
							className={`${fieldStyle} ${errors.firstName ? 'border-red-500' : ''}`}
							id='firstName'
							name='firstName'
							placeholder='john doe'
							aria-required='true'
						/>
						<ErrorMessage role='alert' name='firstName' component='div' className={errorStyle} aria-live='assertive' />
						<label className={labelStyle} htmlFor='lastName'>
							Last Name *
						</label>
						<Field
							className={`${fieldStyle} ${errors.lastName ? 'border-red-500' : ''}`}
							id='lastName'
							name='lastName'
							placeholder='last name'
							aria-required='true'
						/>
						<ErrorMessage role='alert' name='lastName' component='div' className={errorStyle} aria-live='assertive' />
						<label className={labelStyle} htmlFor='email'>
							Email *
						</label>
						<Field
							className={`${fieldStyle} ${errors.email ? 'border-red-500' : ''}`}
							id='email'
							name='email'
							type='email'
							placeholder='email@gmail.com'
							aria-required='true'
						/>
						<ErrorMessage role='alert' name='email' component='div' className={errorStyle} aria-live='assertive' />
						<fieldset className='mt-4'>
							<legend className={labelStyle} id='radioGroup'>
								Query Type *
							</legend>
							<div className='flex flex-col' role='group' aria-labelledby='radioGroup'></div>
							<label tabIndex='0' className={`${fieldStyle} mb-0 flex gap-2 focus:bg-green-200 hover:bg-green-200`}>
								<Field type='radio' name='queryType' value='general' />
								General Enquiry
							</label>

							<label
								tabIndex='0'
								className={`${fieldStyle} flex gap-2 focus:bg-green-200 hover:bg-green-200`}
							>
								<Field type='radio' name='queryType' value='support' aria-required='true' />
								Support Request
							</label>
						</fieldset>
						<ErrorMessage role='alert' name='queryType' component='div' className={errorStyle} aria-live='assertive' />
						<label className={labelStyle} htmlFor='message' required>
							Message *
						</label>
						<Field
							className={`${fieldStyle} ${errors.message ? 'border-red-500' : ''}`}
							id='message'
							name='message'
							placeholder='message'
							as='textarea'
							rows='6'
							aria-required='true'
						/>
						<ErrorMessage role='alert' name='message' component='div' className={errorStyle} aria-live='assertive' />

						<label className={`${labelStyle} flex mt-6`}>
							<Field
								className={`${errors.firstName ? 'border-red-500' : ''} mr-2 bg-green-600`}
								type='checkbox'
								name='toggle'
								aria-required='true'
							/>
							I consent to being contacted by the team *
						</label>
						<ErrorMessage role='alert' name='toggle' component='div' className={errorStyle} aria-live='assertive' />

						<button
							className='text-white font-bold py-3 mt-6 bg-green-600 hover:bg-green-800 active:bg-green-800 rounded-lg'
							type='submit'
						>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		
		</div>
	);
}

export default App;
