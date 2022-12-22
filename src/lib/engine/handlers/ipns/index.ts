import * as Name from 'w3name';

const { Revision } = Name;

// names is a Map of strings to an object of their respective WritableName and encoded Revision
let names: Map<string, { name: Name.WritableName; revision: Revision }> = new Map();

export const DEFAULT_IPNS_NICKNAME = 'Master IPNS CID';

export const ipns = {
	create: async ({
		nickname = Math.random().toString(36).substring(7),
		bytes = null
	}: {
		nickname?: string;
		bytes?: Uint8Array;
	} = {}) => {
		let name;
		try {
			name = bytes ? await Name.from(bytes) : await Name.create();
		} catch (error) {
			console.log(error);
			throw new Error(error);
		}

		// throw if no name
		if (!name) throw new Error('No name created');

		names.set(nickname, { name });
		return { nickname, publicKey: name.toString() };
	},
	initialize: async ({ nickname, value }: { nickname: string; value: string }) => {
		// throw if no value
		if (!value) throw new Error('No value provided');
		// throw if no name
		if (!nickname || !names.has(nickname)) throw new Error('Nickname value found');

		const { name } = names.get(nickname);

		// initialize
		try {
			const revision = await Name.v0(name, value);
			await Name.publish(revision, name.key);

			// save name to Map with nickname as key if avail, if not, use random string as key
			names.set(nickname, { name, revision: Revision.encode(revision) });
			return revision;
		} catch (error) {
			console.log(error);
		}
	},
	update: async ({
		nickname = DEFAULT_IPNS_NICKNAME,
		value
	}: {
		nickname: string;
		value: string;
	}) => {
		let { name, revision } = names.get(nickname);

		if (!name) throw new Error('No name found');
		if (!value) throw new Error('No value provided');

		try {
			revision = revision ? Revision.decode(revision) : await Name.resolve(name);
		} catch (error) {
			console.log('No revision. Did you save v0 using initialize()?', error);
		}

		let nextRevision;

		if (!revision) {
			// no revision, let's try to initialize instead of update
			try {
				nextRevision = await ipns.initialize({ nickname, value });
			} catch (error) {
				console.log('Cannot update or initialize', error);
			}
		} else {
			nextRevision = await Name.increment(revision, value);

			await Name.publish(nextRevision, name.key);
		}

		names.set(nickname, { name, revision: Revision.encode(nextRevision) });

		return {
			value: nextRevision.value,
			nickname,
			sequence: nextRevision.sequence,
			validity: nextRevision.validity
		};
	},
	exportBytes: async ({ nickname }: { nickname: string }) => {
		if (!nickname || !names.has(nickname)) throw new Error('Nickname value found');

		const { name } = names.get(nickname);
		if (!name) throw new Error('No name found');

		return name.key.bytes; // TODO: password protect?
	},
	latest: async (name: string) => {
		return await Name.resolve(names.get(name).name);
	},
	/**
	 * @param {string} publicKey - base36 "libp2p-key" encoding of the public key; https://github.com/web3-storage/w3name/blob/7badd01e0d1c24b297abeec3c67429352ffd2b0f/packages/api/src/name.ts#L110
	 * @returns {Name.Revision} - https://web3-storage.github.io/w3name/classes/Revision.html
	 */
	resolve: async (publicKey: string) => {
		if (!publicKey) throw new Error('No public key provided');
		return await Name.resolve(Name.parse(publicKey));
	},
	getAll: () => {
		let result = [];
		for (let [nickname, { name }] of names) {
			result.push({
				nickname,
				nameCid: name.toString(),
				publicKey: new Uint8Array(name.key.public._key)
			});
		}
		return result;
	}
};
