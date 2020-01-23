export default function reducer(reducerTypes, initialState) {
	return (state = initialState, action) =>
		reducerTypes[action.type] ? reducerTypes[action.type](state, action) : state;
}
