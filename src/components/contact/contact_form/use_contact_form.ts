import { useState } from 'react';
import clientConfig from '../../../config/client_config';
import { submitContactForm } from './submit_contact_form';

export type ContactFormSubmissionState = {
	isSubmitting: boolean;
	submittedText?: string; // so we can display it back after
	submissionResult?: 'FAILED' | 'SUCCESS';
	responseMessage?: string;
};

export type ContactFormState = {
	name: string;
	email: string;
	message: string;
};

declare global {
	interface Window {
		grecaptcha: any;
	}
}

export function useContactForm() {
	const [formStatus, setFormStatus] = useState<ContactFormSubmissionState>({
		isSubmitting: false,
	});

	const performSubmit = async (inputs: ContactFormState) => {
		setFormStatus({
			...formStatus,
			isSubmitting: true,
		});

		if (!window.grecaptcha) {
			console.error(`NH: grecaptcha not defined.`);
		}
		// refresh the recaptcha token as they expire after 2 minutes
		const token = await window.grecaptcha.execute(
			clientConfig.recaptchaSiteKey,
			{
				action: 'submit_contact_form',
			}
		);

		if (token) {
			const result = await submitContactForm(inputs, token);

			setFormStatus({
				...formStatus,
				isSubmitting: false,
				submittedText: inputs.message,
				submissionResult: result.result,
				responseMessage: result.message,
			});
		} else {
			setFormStatus({
				...formStatus,
				isSubmitting: false,
				submissionResult: 'FAILED',
				responseMessage: 'Sorry. Recaptcha could not be checked.',
			});
		}
	};

	return { formStatus, performSubmit };
}
