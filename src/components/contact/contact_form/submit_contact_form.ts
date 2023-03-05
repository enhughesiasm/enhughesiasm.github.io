import clientConfig from '../../../config/client_config';
import { JSON_to_URLEncoded } from '../../occasional-email-experience/signup/signup_utils';
import type { ContactFormState } from './use_contact_form';

export async function submitContactForm(
	inputs: ContactFormState,
	recaptchaToken: string
): Promise<{ result: 'SUCCESS' | 'FAILED'; message: string }> {
	const url = `${clientConfig.nodeProtocol}://${clientConfig.nodeServer}:${clientConfig.nodePort}/api/submit-contact-form`;

	try {
		const response = await fetch(url, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON_to_URLEncoded({
				...inputs,
				recaptchaToken: recaptchaToken,
			}), // this has to be url_encoded rather than pure JSON because CORS stops us sending json "cross-domain", ie to a different port
		});

		if (response.status !== 200) {
			return { result: 'FAILED', message: 'Could not reach server.' };
		} else {
			if (response.ok) {
				const json = await response.json();

				return {
					result: json.success ? 'SUCCESS' : 'FAILED',
					message: json.message,
				};
			} else {
				return {
					result: 'FAILED',
					message: 'Something happened. Sorry!',
				};
			}
		}
	} catch (err) {
		return { result: 'FAILED', message: 'Could not reach server.' };
	}
}

// export async function testRoundTrip() {
// 	const url =
// 		clientConfig.nodeProtocol +
// 		'//' +
// 		clientConfig.nodeServer +
// 		':' +
// 		clientConfig.nodePort +
// 		'/api/test-round-trip';

// 	const response = await fetch(url, {
// 		method: 'POST',
// 		mode: 'cors',
// 		cache: 'no-cache',
// 		headers: {
// 			Accept: 'application/x-www-form-urlencoded',
// 			'Content-Type': 'application/x-www-form-urlencoded',
// 		},
// 		body: { message: 'hello server' },
// 	});

// 	return response;
// }
