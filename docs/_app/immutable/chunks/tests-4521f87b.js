import { a as generateRsaJwk, b as getLoadedKeys, A as Arweave, h as handlers } from "./Confirmer.svelte_svelte_type_style_lang-0b3ba63e.js";
import "./preload-helper-6b8a655d.js";
import "./index-644ae64b.js";
import "./index-d12ac42e.js";
import "./events-9be93652.js";
let arweave;
async function bundle(arweave2) {
  const transaction = await arweave2.createTransaction({
    data: '<html><head><meta charset="UTF-8"><title>Hello Bundlr!</title></head><body>Hello Bundlr!</body></html>'
  });
  transaction.addTag("Content-Type", "text/html");
  transaction.addTag("test", "test");
  console.log({ transaction });
  const dataEntry = await handlers.arweaveWalletAPI.dispatch(transaction);
  console.log({ dataEntry });
  return dataEntry;
}
async function flow() {
  await generateRsaJwk();
  getLoadedKeys();
  arweave = Arweave.init({});
  const Tx = await bundle(arweave);
  console.log(`IDs: ${JSON.stringify(Tx)}`);
  return Tx;
}
export {
  flow
};
//# sourceMappingURL=tests-4521f87b.js.map
