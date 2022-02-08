import { Action } from 'redux';

import * as types from './actionsTypes';

export function connectRequest(): Action {
	return {
		type: types.METEOR.REQUEST
	};
}

