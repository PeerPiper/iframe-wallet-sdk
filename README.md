# PeerPiper iFrame Wallet Software Dev Kit

NOTE: If you simply want to deploy your own wallet, you have options:

- [x] Use this github repo website [https://peerpiper.github.io/iframe-wallet-sdk/](https://peerpiper.github.io/iframe-wallet-sdk/)

- [x] Clone this repo and use your own site (Github)

- [x] Use the Engine with your own frontend (React, Vue, whatever)

- [x] Areave wallet

Use the default PeerPiper Web3 Wallet, or use the kit to make your own / integrate to your back end.

This library contains:

- ENGINE: The iFrame Wallet engine that can be used with any front end framework, and
- FRONTEND: The Svelte Wallet Front end as a reference implementation of how to use the engine.

# Using the Front End

If you want to host your own wallet, using Svelte simply do:

```svelte
<script>
	import { FrontEnd } from '@peerpiper/iframe-wallet-sdk';
</script>

<FrontEnd />
```

That's it, the wallet takes care of the rest.

# Using the Engine

If you wanted to use another front end (say, React or some other lesser technology) then you can interface witht the engine.

The engine exports the class and types for use by a front end, simply import them:

## Client Connection via PenPal RPC

Since the wallet and keys are held in a separate Browser context (iFrame) the front end needs to connect to the engine via remote procedure call (RPC) using [penpal](https://www.npmjs.com/package/penpal). This is done via a [Connector](https://github.com/PeerPiper/web3-wallet-connector). To establish an RPC Connection to the Wallet Engine via the Connector, the API is:

```js
// Connect to the Wallet engine
import { Connection } from '@peerpiper/iframe-wallet-sdk';

const connection = new Connection();
connector = await connection.init(optionalHandlers);

const connectionReady = async () => {
	connector.walletReady(); // signal to the connector the wallet has loaded
};
```

## Confirm Wallet Transactions

You can set custom wallet confirmation functions by passing them into the config file.

```js
import { handlers } from '@peerpiper/iframe-wallet-sdk';

const confirm = async (confirmSection, params) => {
	// are you sure you want this DApp to sign/decrypt/re-encrypt?
};

// pass the above confirm function to the handlers so they can use it when their methods are called
handlers.setConfig('confirm', confirm);

// the engine will insert this into the process flow
// await confirm(...) // wait for user to approved/disapprove
```

## Connect to Web3 Connector

The SDK also exports handy CONSTANTS to make a connection between the embedded iFrame and the Parent website where the keys are held.

```js
// the website looking to use the iFram Wallet
// ./src/lib/frontend/Conector.svelte
import { CONSTANTS } from '@peerpiper/iframe-wallet-sdk';
CONSTANTS.OPENED_SIGNAL;
CONSTANTS.WINDOW_SYNC;
CONSTANTS.CLOSING;

// the opened Parent Wallet Website
// ./src/lib/frontend/Opened.svelte
import { CONSTANTS } from '@peerpiper/iframe-wallet-sdk';
CONSTANTS.OPENED_SIGNAL;
CONSTANTS.WINDOW_SYNC;
CONSTANTS.CLOSING;
```

### Using the wallet

Since the Wallet is kept in it's own separate browsing context (to keep your keys safely away form the actual website), the Web3 Wallet Connector is used to _actually_ use most of the wallet functionality.

That said, there are a few functions that are used when the wallet is _not_ embedded in another site. These are generating keys and loading keys from storage. These functions are exported as utility functions:

```js
import {
	generateMnemonic,
	generateRsaJwk,
	loadSecrets,
	getLoadedKeys
} from '@peerpiper/iframe-wallet-sdk';
```

### Using the Wallet (via Connector)

Since the Wallet is kept in it's own separate browsing context (to keep your keys safely away form the actual website), the Web3 Wallet Connector is used to _actually_ use most of the wallet functionality.

Web3 Connector: [Connector](https://github.com/PeerPiper/web3-wallet-connector)

The Wallet API is used ndirectly through the Connector and the API can be found over at that link, but generally it looks something like:

```js
import { Proxcryptor } from '@peerpiper/iframe-wallet-sdk';

await proxcryptor.getPublicKey();
await proxcryptor.generateReKey(targetPublicKey, tag);
await proxcryptor.reEncrypt(targetPublicKey, tagNode.encryptedKey, targetsReKey);
await proxcryptor.selfEncrypt(symmetricKey, tag);
await proxcryptor.reDecrypt(re_encrypted_message);
await proxcryptor.selfDecrypt(tagNode.encryptedKey);
```

## Contributing

Pull requests, issue logs are welcome. Wallet infrastructure should be own by all of us and available to everyone.
