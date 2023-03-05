import { Cookie, WarningCircle } from 'iconoir-react';
import { MailchimpSignupForm } from './MailchimpSignupForm';
import { SignupResultAlreadySubscribed } from './SignupResult_Already_Subscribed';
import { SignupResultFailed } from './SignupResult_Failed';
import { useMailchimpSignup } from './use_submit_signup';

export const GDPR_CONSENT_TEXT =
	'Yes, Neil may store the information provided and use it to send me stories and updates on books, talks & other products.';

export const MailchimpSignup: React.FC = () => {
	const { signupState, updateSignupState, performSubmit } =
		useMailchimpSignup();

	return (
		<div className='mt-6'>
			{signupState.isSubmitting && (
				<div className='mx-12 bg-green-200 py-6 text-center font-serif text-green-700'>
					<Cookie className='inline animate-spin text-3xl ' />{' '}
					Sending...
				</div>
			)}
			{!signupState.isSubmitting && (
				<>
					{!signupState.hasSubmitted && (
						<MailchimpSignupForm
							signupState={signupState}
							updateSignupState={updateSignupState}
							performSubmit={performSubmit}
						/>
					)}

					{signupState.hasSubmitted &&
						signupState.submitResult === 'SUCCESS' && (
							<meta
								http-equiv='refresh'
								content='0;url=/confirm-signup'
							/>
						)}
					{signupState.hasSubmitted &&
						signupState.submitResult === 'FAILED' && (
							<SignupResultFailed />
						)}
					{signupState.hasSubmitted &&
						signupState.submitResult === 'ALREADY_SUBSCRIBED' && (
							<SignupResultAlreadySubscribed />
						)}
				</>
			)}
		</div>
	);
};
