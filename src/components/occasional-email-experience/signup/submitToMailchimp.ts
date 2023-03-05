import clientConfig from '../../../config/client_config';
import { JSON_to_URLEncoded } from './signup_utils';

export type SubmitToMailChimpResult = {
	result: 'SUCCESS' | 'FAILED' | 'ALREADY_SUBSCRIBED';
	message: string;
};

export async function submitToMailchimp(
	email: string,
	gdprConfirmed: boolean,
	gdprConsentText: string
): Promise<SubmitToMailChimpResult> {
	const id = '11d72325c1';

	const url = `${clientConfig.nodeProtocol}://${clientConfig.nodeServer}:${clientConfig.nodePort}/api/submit-subscribe-popup`;

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
				id: id,
				EMAIL: email,
				gdpr: gdprConfirmed,
				gdprConsentText: gdprConsentText,
			}), // this has to be url_encoded rather than pure JSON because CORS stops us sending json "cross-domain", ie to a different port
		}).catch((error) => {
			throw error;
		});

		if (response.ok) {
			const result = (await response.json()) as {
				success: boolean;
				message: string;
				alreadySubscribed: boolean;
			};

			return getResult(result);
		} else {
			return {
				result: 'FAILED',
				message: 'Communication error with server.',
			};
		}
	} catch (err) {
		console.error(err);
		return {
			result: 'FAILED',
			message: 'Something went wrong.',
		};
	}
}

function getResult(result: {
	success: boolean;
	message: string;
	alreadySubscribed: boolean;
}): SubmitToMailChimpResult {
	if (result.success) {
		return { result: 'SUCCESS', message: result.message };
	} else {
		if (result.alreadySubscribed) {
			return { result: 'ALREADY_SUBSCRIBED', message: result.message };
		} else {
			return { result: 'FAILED', message: result.message };
		}
	}
}
