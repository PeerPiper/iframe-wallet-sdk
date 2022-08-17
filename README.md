# PeerPiper iFrame Wallet Software Dev Kit

Use the default PeerPiper Web3 Wallet, or use the kit to make your own / integrate to your back end.

This library contains:

- The iFrame Wallet engine that can be used with any front end framework, and
- The Svelte Wallet Front end as a reference implementation of how to use the engine.

# Using the Engine

The engine exports the class and tpyes for use by a front end, simply import them:

## Proxy Re-encryptor (Proxcryptor)

```js
import { Proxcryptor } from '@peerpiper/iframe-wallet-sdk';

await proxcryptor.getPublicKey();
await proxcryptor.generateReKey(targetPublicKey, tag);
await proxcryptor.reEncrypt(targetPublicKey, tagNode.encryptedKey, targetsReKey);
await proxcryptor.selfEncrypt(symmetricKey, tag);
await proxcryptor.reDecrypt(re_encrypted_message);
await proxcryptor.selfDecrypt(tagNode.encryptedKey);
```

## Ed25519

```js

```

# Using the front end

```
npm run dev
```
