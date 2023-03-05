import type { SignupState } from './use_submit_signup';

// weak validation but it'll do!
export const isEmailValid = (email: string) => {
	return email.length > 5 && /^.+@.+\..+$/.test(email);
};

export const isEnabled = (state: SignupState) => {
	return state.gdprConfirmed && isEmailValid(state.email);
};
