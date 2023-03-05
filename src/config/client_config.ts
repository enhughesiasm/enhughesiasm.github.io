const isProduction = import.meta.env.PROD;

let clientConfig = {
	nodePort: 6565,
	nodeServer: isProduction ? 's.enhughesiasm.com' : 'localhost',
	nodeProtocol: isProduction ? 'https' : 'http',
	recaptchaSiteKey: import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY,
};

export default clientConfig;
