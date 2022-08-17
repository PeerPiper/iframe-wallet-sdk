// Pre-Init
const LUT_HEX_4b = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
const LUT_HEX_8b = new Array(0x100);
for (let n = 0; n < 0x100; n++) {
	LUT_HEX_8b[n] = `${LUT_HEX_4b[(n >>> 4) & 0xf]}${LUT_HEX_4b[n & 0xf]}`;
}

// End Pre-Init
export function bufftoHex(buffer) {
	let out = '';
	for (let idx = 0, edx = buffer.length; idx < edx; idx++) {
		out += LUT_HEX_8b[buffer[idx]];
	}
	return out;
}

export const shorten = (key: string, start = 6, end = 6) => {
	if (key.length < start + end + 3) return key;
	return key.slice(0, start) + '...' + key.slice(key.length - end, key.length);
};

export const shortenURL = (key: string) => {
	const tail = 30;
	const start = 'https://'.length; // key.slice(start, Math.min(start, 8)) +
	const end = Math.max(key.length - tail, 0);
	const maybeEllips = key.length > tail ? '..' : '';
	return maybeEllips + key.slice(end, key.length);
};
