import { CheckCircle, Mail, WarningCircle } from 'iconoir-react';
import { GDPR_CONSENT_TEXT } from './MailchimpSignup';
import { isValidEmail, isEnabled } from './signup_utils';
import type { SignupState } from './use_submit_signup';

export const MailchimpSignupForm: React.FC<{
	signupState: SignupState;
	updateSignupState: (newState: SignupState) => void;
	performSubmit: () => void;
}> = ({ signupState, updateSignupState, performSubmit }) => (
	<form
		id='mailchimpForm'
		onSubmit={(e) => {
			e.preventDefault();
			performSubmit();
		}}
		className='mx-12 mt-6 space-y-6 bg-green-200 py-3 px-6'>
		<h3 className='py-1 text-center font-serif font-bold '>
			👇 Sign up for the experience here
		</h3>
		<div className='flex flex-row items-center space-x-3'>
			<label
				className='inline-flex flex-row space-x-2 font-serif font-bold'
				htmlFor='mce-EMAIL'>
				<Mail className='inline text-zinc-500' />
			</label>
			<input
				type='email'
				placeholder='Enter your email to sign up'
				className={`w-full rounded border-2 border-gray-200 py-2 px-3 font-serif
					${
						signupState.email.length > 0 &&
						(isValidEmail(signupState.email)
							? ' !border-green-500'
							: '  !border-red-500')
					}`}
				value={signupState.email}
				onChange={(e) => {
					updateSignupState({
						...signupState,
						email: e.target.value,
					});
				}}
				name='EMAIL'
				id='mce-EMAIL'
			/>
			{signupState.email.length > 0 &&
				isValidEmail(signupState.email) && (
					<CheckCircle className='text-green-500' />
				)}
			{signupState.email.length > 0 &&
				!isValidEmail(signupState.email) && (
					<WarningCircle className='text-red-500' />
				)}
		</div>
		{signupState.email.length > 0 && (
			<div className='flex flex-row items-center space-x-3'>
				<input
					type='checkbox'
					id='gdpr_1917'
					name='gdpr[1917]'
					value='Y'
					checked={signupState.gdprConfirmed}
					onChange={(e) => {
						updateSignupState({
							...signupState,
							gdprConfirmed: e.target.checked,
						});
					}}
					className='ml-12 h-6 w-6 p-6'
				/>
				<span className='text-sm'>
					<span
						className={
							!signupState.gdprConfirmed
								? 'font-bold text-red-500'
								: 'text-green-500'
						}></span>
					{GDPR_CONSENT_TEXT}{' '}
					{!signupState.gdprConfirmed ? (
						<div className='mt-3 text-red-500'>
							<WarningCircle className='inline text-red-500' />{' '}
							Tick to confirm.{' '}
						</div>
					) : (
						<div className='mt-3 text-green-500'>
							<CheckCircle className='inline text-green-500' />{' '}
							Confirmed.
						</div>
					)}
				</span>
			</div>
		)}
		<div className='text-center'>
			<input
				type='submit'
				readOnly
				disabled={!isEnabled(signupState)}
				value={isEnabled(signupState) ? 'Subscribe' : 'Subscribe'}
				name='subscribe'
				id='mc-subscribe'
				className={` rounded-xl py-3 px-6 text-xl font-bold text-white
				${
					!isEnabled(signupState)
						? 'cursor-not-allowed bg-gray-200 !text-red-400'
						: 'cursor-pointer bg-green-500 hover:bg-green-400'
				}`}
			/>
		</div>

		<p className='bg-amber-50 py-3 px-6 text-sm italic'>
			Mailchimp is my email list management platform. By clicking
			&apos;subscribe&apos;, you acknowledge that your information will be
			processed according to the terms on this page, and transferred to
			Mailchimp for processing.{' '}
			<a href='https://mailchimp.com/legal/' rel='noopener noreferrer'>
				Learn more about Mailchimp&apos;s privacy practices here.
			</a>
		</p>
	</form>
);
