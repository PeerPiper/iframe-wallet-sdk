import { g as generateRsaJwk, A as Arweave, h as handlers } from "./Index-2d1caaba.js";
import "./index-09de7b82.js";
import "./events-24eb7459.js";
import "./preload-helper-6b8a655d.js";
import "./index-95820fb8.js";
import "./index-6ab0de96.js";
let arweave;
async function bundle(arweave2) {
  const transaction = await arweave2.createTransaction({
    data: '<html><head><meta charset="UTF-8"><title>Hello Bundlr!</title></head><body>Hello Bundlr!</body></html>'
  });
  transaction.addTag("Content-Type", "text/html");
  transaction.addTag("test", "test");
  console.log({ transaction });
  const txid = await handlers.arweaveWalletAPI.dispatch(transaction);
  console.log({ txid });
  return txid;
}
async function flow() {
  await generateRsaJwk();
  arweave = Arweave.init({});
  const txid = await bundle(arweave);
  console.log(`IDs: ${txid}`);
  return txid;
}
export {
  flow
};
//# sourceMappingURL=tests-0ae69734.js.map
