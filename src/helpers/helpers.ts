export function lerp(a: number, b: number, alpha: number) {
	return a + alpha * (b - a);
}

export function clamp(val: number, min: number, max: number) {
	return Math.min(Math.max(val, min), max);
}
