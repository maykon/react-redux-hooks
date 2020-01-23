import { createAction, handleActions } from 'redux-actions';

export const increment = createAction('INCREMENT');
export const set = createAction('SET');

const initialState = {
	counter: 0
};

export default handleActions(
	{
		[increment]: state => ({ ...state, counter: state.counter + 1 }),
		[set]: (state, action) => ({
			...state,
			counter: isNaN(action.payload) ? 0 : action.payload
		})
	},
	initialState
);
