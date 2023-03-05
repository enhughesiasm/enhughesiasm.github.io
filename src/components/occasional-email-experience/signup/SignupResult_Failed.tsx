import { WarningCircle } from 'iconoir-react';

export const SignupResultFailed: React.FC = () => (
	<div className='mx-12 space-y-3 bg-red-200 py-6 px-12'>
		<h2 className='text-xl font-bold text-red-500'>
			<WarningCircle className='inline' /> Sorry!
		</h2>
		<div>
			Something went wrong.{' '}
			<a
				className='text-blue-500 underline hover:text-blue-400'
				href='http://eepurl.com/gB3e8P'>
				Click here to try an alternative form.
			</a>
		</div>
	</div>
);
