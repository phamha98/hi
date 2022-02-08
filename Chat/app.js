

export function appStart({ root, ...args }) {
	return {
		type: APP.START,
		root,
		...args
	};
}
