import { useState } from 'react';
import { GDPR_CONSENT_TEXT } from './MailchimpSignup';
import { setPopupStorageSubmitted } from './PopupStorage';
import { submitToMailchimp } from './submitToMailchimp';

export type SignupState = {
	email: string;
	firstName: string;
	gdprConfirmed: boolean;
	hasSubmitted: boolean;
	isSubmitting: boolean;
	submitResult?: 'SUCCESS' | 'FAILED' | 'ALREADY_SUBSCRIBED';
	errorMessage?: string;
};

export const useMailchimpSignup = () => {
	const [signupState, setSignupState] = useState<SignupState>({
		email: '',
		firstName: '',
		gdprConfirmed: false,
		hasSubmitted: false,
		isSubmitting: false,
	});

	const performSubmit = async () => {
		setSignupState({ ...signupState, isSubmitting: true });
		const result = await submitToMailchimp(
			signupState.email,
			signupState.gdprConfirmed,
			GDPR_CONSENT_TEXT
		);

		setPopupStorageSubmitted();

		setSignupState({
			...signupState,
			submitResult: result.result,
			hasSubmitted: true,
			isSubmitting: false,
		});
	};

	const updateSignupState = (newState: SignupState) => {
		setSignupState(newState);
	};

	return { signupState, performSubmit, updateSignupState };
};
