// test dispatch in browser
// import dispatch from arweave handler
import { handlers as wallet, generateRsaJwk } from '@peerpiper/iframe-wallet-sdk';

import Arweave from 'arweave';

let arweave: Arweave;

async function bundle(arweave) {
	const transaction = await arweave.createTransaction({
		data: '<html><head><meta charset="UTF-8"><title>Hello Bundlr!</title></head><body>Hello Bundlr!</body></html>'
	});

	transaction.addTag('Content-Type', 'text/html');
	transaction.addTag('test', 'test');

	console.log({ transaction });

	const txid = await wallet.arweaveWalletAPI.dispatch(transaction);
	console.log({ txid });

	return txid;
}

export async function flow() {
	await generateRsaJwk();

	arweave = Arweave.init({});
	const txid = await bundle(arweave);

	console.log(`IDs: ${txid}`);

	return txid;
}
