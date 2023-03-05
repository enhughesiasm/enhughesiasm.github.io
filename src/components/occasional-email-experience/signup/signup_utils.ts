import type { SignupState } from './use_submit_signup';

export const isValidEmail = (email: string) => {
	return email && /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export const isEnabled = (state: SignupState) => {
	return state.gdprConfirmed && isValidEmail(state.email);
};

export const isValidName = (name: string) => {
	return name && name.length >= 3;
};

export const isValidMessage = (message: string) => {
	return message && message.length >= 20 && message.length < 2000;
};

export function JSON_to_URLEncoded(element: any, key?: any, l?: any) {
	var list = l || [];
	if (typeof element == 'object') {
		for (var idx in element)
			JSON_to_URLEncoded(
				element[idx],
				key ? key + '[' + idx + ']' : idx,
				list
			);
	} else {
		list.push(key + '=' + encodeURIComponent(element));
	}
	return list.join('&');
}
