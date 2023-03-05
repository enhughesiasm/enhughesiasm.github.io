import { Cookie } from 'iconoir-react';

export const LoadingBox: React.FC = () => (
	<div className='mx-12 bg-green-200 py-6 text-center font-serif text-green-700'>
		<Cookie className='inline animate-spin text-3xl ' /> Sending...
	</div>
);
