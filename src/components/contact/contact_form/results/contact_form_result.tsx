import { CheckCircle, WarningCircle } from 'iconoir-react';
import { ContactFormResultSubmittedText } from './contact_form_result_submitted_text';

export const ContactFormResult: React.FC<{
	success: boolean;
	submittedText: string;
	message?: string;
}> = ({ success, message, submittedText }) => (
	<>
		<div
			className={`${
				success ? 'bg-green-100' : 'bg-red-100'
			} mt-6 py-3 px-6`}>
			{success && (
				<p className='text-center text-xl'>
					<CheckCircle className='inline pr-4 text-3xl text-green-500' />{' '}
					<strong>SUCCESS!</strong> Your message has been sent. Thank
					you!
				</p>
			)}
			{!success && (
				<div className='space-y-3 text-center'>
					<p className='text-xl'>
						<WarningCircle className='inline pr-4 text-3xl text-red-500' />{' '}
						ERROR: {message}
					</p>
					<p className=''>
						Your message has <strong>NOT</strong> been sent. Sorry!.
					</p>
					<p>
						If this problem persists, please email directly via{' '}
						<em>neil at walkingoncustard dot com</em>
					</p>
				</div>
			)}
			<ContactFormResultSubmittedText submittedText={submittedText} />
		</div>
	</>
);
