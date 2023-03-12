import { RECAPTCHA_SITE_KEY } from '../data/definitions';

const isProduction = import.meta.env.PROD;

let clientConfig = {
	nodePort: 6565,
	nodeServer: isProduction ? 's.enhughesiasm.com' : 'localhost',
	nodeProtocol: isProduction ? 'https' : 'http',
	recaptchaSiteKey: RECAPTCHA_SITE_KEY,
};

export default clientConfig;
