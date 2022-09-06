// test dispatch in browser
// import dispatch from arweave handler
import { handlers as wallet, generateRsaJwk, getLoadedKeys } from '@peerpiper/iframe-wallet-sdk';

import Arweave from 'arweave';

let arweave: Arweave;

async function bundle(arweave) {
	const transaction = await arweave.createTransaction({
		data: '<html><head><meta charset="UTF-8"><title>Hello Bundlr!</title></head><body>Hello Bundlr!</body></html>'
	});

	transaction.addTag('Content-Type', 'text/html');
	transaction.addTag('test', 'test');

	console.log({ transaction });

	const dataEntry = await wallet.arweaveWalletAPI.dispatch(transaction);
	console.log({ dataEntry });

	return dataEntry;
}

export async function flow() {
	await generateRsaJwk();
	const keys = getLoadedKeys();

	arweave = Arweave.init({});
	const Tx = await bundle(arweave);

	console.log(`IDs: ${JSON.stringify(Tx)}`);

	return Tx;
}
