import fs from 'node:fs';

export async function cacheLocal<T>(
	key: string,

	performFetch: () => Promise<T>
): Promise<T> {
	// if (!import.meta.env.DEV) {
	// 	console.log(`Prod mode, skipping cache...`);
	// 	return await performFetch();
	// }

	const cacheFolder = `./public/.cache`;
	const cacheLocation = `${cacheFolder}/${key}.json`;

	if (!fs.existsSync(cacheFolder)) {
		fs.mkdirSync(cacheFolder, { recursive: true });
	}

	if (fs.existsSync(cacheLocation)) {
		// console.log(`🥳 Cache hit for ${key}!`);

		const raw = fs.readFileSync(cacheLocation);
		return JSON.parse(raw as unknown as string);
	} else {
		console.log(`😢 Cache miss for ${key}!`);

		const response = await performFetch();

		fs.writeFileSync(cacheLocation, JSON.stringify(response));

		return response as T;
	}
}
