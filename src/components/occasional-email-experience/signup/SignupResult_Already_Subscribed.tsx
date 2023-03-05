import { WarningCircle } from 'iconoir-react';

export const SignupResultAlreadySubscribed: React.FC = () => (
	<div className='mx-12 bg-amber-200 py-6 px-12'>
		<h2 className='text-xl font-bold text-amber-700'>
			<WarningCircle className='inline' /> Oops!
		</h2>
		<p className='py-3'>
			<strong>That email was already subscribed</strong>. Your email
			consent has been recorded.
		</p>
		<p>
			{' '}
			If you want to update your subscription preferences,{' '}
			<a
				href='http://eepurl.com/gB3e8P'
				className='text-blue-500 underline hover:text-blue-400'>
				click here and fill out the form.
			</a>
		</p>
	</div>
);
