const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const defaultTypes = [REQUEST, SUCCESS, FAILURE];
function createRequestTypes(base = {}, types = defaultTypes): Record<any, any> {
	const res: Record<any, any> = {};
	types.forEach(type => (res[type] = `${base}_${type}`));
	return res;
}

// Login events
export const LOGIN = createRequestTypes('LOGIN', [...defaultTypes, 'SET_SERVICES', 'SET_PREFERENCE', 'SET_LOCAL_AUTHENTICATED']);
export const SHARE = createRequestTypes('SHARE', ['SELECT_SERVER', 'SET_USER', 'SET_SETTINGS', 'SET_SERVER_INFO']);
