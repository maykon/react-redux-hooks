import React, { useState, useCallback } from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { increment, set } from '../../store/reducers/counter';

const Counter = () => {
	const dispatch = useDispatch();
	const [value, setValue] = useState(0);
	const { counter } = useSelector(state => state.counter, shallowEqual);
	const incCounter = useCallback(() => dispatch(increment()), [dispatch]);
	const setCounter = useCallback(() => dispatch(set(value)), [value, dispatch]);

	return (
		<div>
			<h1>Counter Hooks</h1>
			<p>
				Counter is: <strong>{counter}</strong>
			</p>
			<form>
				<input value={value} onChange={e => setValue(Number(e.target.value))} />
				<button type="button" onClick={incCounter}>
					Increment
				</button>
				<button type="button" onClick={setCounter}>
					Set
				</button>
			</form>
		</div>
	);
};

export default Counter;
