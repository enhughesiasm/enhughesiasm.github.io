import { LoadingBox } from '../../shared/LoadingBox';
import { ContactForm } from './contact_form';
import { ContactFormResult } from './results/contact_form_result';
import { useContactForm } from './use_contact_form';

export const ContactFormGate: React.FC = () => {
	const { formStatus, performSubmit } = useContactForm();

	const success = formStatus.submissionResult === 'SUCCESS';

	return (
		<>
			{formStatus.isSubmitting && <LoadingBox />}
			{!formStatus.isSubmitting && (
				<>
					{formStatus.submissionResult === undefined && (
						<ContactForm onSubmit={performSubmit} />
					)}
				</>
			)}
			{formStatus.submissionResult !== undefined && (
				<>
					<ContactFormResult
						success={success}
						message={formStatus.responseMessage}
						submittedText={formStatus.submittedText ?? ''}
					/>
				</>
			)}
		</>
	);
};
