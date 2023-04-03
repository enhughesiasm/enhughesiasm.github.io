import { Check, Mail, User } from 'iconoir-react';
import React, { useState } from 'react';
import {
	isValidEmail,
	isValidMessage,
	isValidName,
} from '../../occasional-email-experience/signup/signup_utils';
import type { ContactFormState } from './use_contact_form';

export const ContactForm: React.FC<{
	onSubmit: (inputs: ContactFormState) => void;
}> = ({ onSubmit }) => {
	const [formState, setFormState] = useState<ContactFormState>({
		name: '',
		email: '',
		message: '',
	});

	const handleInputChange = (name: keyof ContactFormState, value: string) => {
		setFormState((inputs) => ({
			...inputs,
			[name]: value,
		}));
	};

	const validName = isValidName(formState.name);
	const validEmail = isValidEmail(formState.email);
	const validMessage = isValidMessage(formState.message);

	const enabled = validName && validEmail && validMessage;

	return (
		<form
			id='contactForm'
			onSubmit={(e) => {
				e.preventDefault();
				onSubmit(formState);
			}}
			className='m-auto w-2/3 space-y-3 bg-blue-100 px-6 py-3'>
			<label
				className='flex flex-row items-center space-x-2'
				htmlFor='fromName'>
				<User className='text-gray-500' /> Name:
				<input
					className={`w-full rounded px-3 py-3
								${
									formState.name.length > 1
										? validName
											? 'bg-green-100'
											: 'bg-red-100'
										: ''
								}`}
					id='fromName'
					name='name'
					placeholder='Enter your name'
					value={formState.name || ''}
					onChange={(e) => {
						handleInputChange('name', e.target.value);
					}}
					required
				/>
			</label>
			<label
				className='flex flex-row items-center space-x-2'
				htmlFor='fromEmail'>
				<Mail className='text-gray-500' /> Email
				<input
					className={`w-full rounded px-3 py-3
					${
						formState.email.length > 1
							? validEmail
								? 'bg-green-100'
								: 'bg-red-100'
							: ''
					}`}
					id='fromEmail'
					name='email'
					placeholder='Enter your email'
					value={formState.email || ''}
					onChange={(e) => {
						handleInputChange('email', e.target.value);
					}}
					required
				/>
			</label>
			<textarea
				rows={6}
				className={`w-full rounded px-3 py-3
					${
						formState.message.length > 1
							? validMessage
								? 'bg-green-100'
								: 'bg-red-100'
							: ''
					}`}
				id='fromMessage'
				name='message'
				placeholder='Enter your message'
				value={formState.message || ''}
				onChange={(e) => {
					handleInputChange('message', e.target.value);
				}}
				required
				style={{ height: 'auto' }}
			/>
			<div className='text-center'>
				<button
					type='submit'
					className={`rounded px-6 py-3 text-xl text-white ${
						true
							? enabled
								? 'cursor-pointer bg-green-500'
								: 'cursor-not-allowed bg-gray-300 !text-red-500'
							: ''
					}`}
					disabled={!enabled}>
					Send
				</button>
			</div>
			<p className='pb-3 text-center text-sm italic'>
				This site is protected by reCAPTCHA and the Google{' '}
				<a
					href='https://policies.google.com/privacy'
					target='_blank'
					rel='noopener noreferrer'
					className='text-blue-500 underline hover:text-blue-400'>
					Privacy Policy
				</a>{' '}
				and{' '}
				<a
					href='https://policies.google.com/terms'
					target='_blank'
					rel='noopener noreferrer'
					className='text-blue-500 underline hover:text-blue-400'>
					Terms of Service
				</a>{' '}
				apply.
			</p>
		</form>
	);
};
