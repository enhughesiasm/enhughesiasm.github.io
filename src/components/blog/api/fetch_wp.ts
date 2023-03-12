export const WP_API_URL = import.meta.env.PUBLIC_WP_API_URL;

export async function fetchWP<T>(
	key: string,
	query = '',
	extractFromResponse?: (res: Response) => Promise<T>
): Promise<T> {
	const url = `${WP_API_URL}/${query}`;

	const res = await fetch(url);

	if (res.ok) {
		if (extractFromResponse) {
			return await extractFromResponse(res);
		} else {
			return (await res.json()) as T;
		}
	} else {
		const error = await res.json();

		throw new Error(
			`			❗ Failed to fetch.
				Code: ${error.code}
				Message: ${error.message}
				Route: ${url}		
				`
		);
	}
}
