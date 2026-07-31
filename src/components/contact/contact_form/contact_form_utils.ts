export const isValidName = (name: string) => name.trim().length > 1;

export const isValidEmail = (email: string) =>
	/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isValidMessage = (message: string) => message.trim().length > 1;

export const JSON_to_URLEncoded = (data: Record<string, string>) =>
	new URLSearchParams(data).toString();
