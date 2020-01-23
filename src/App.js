import React from 'react';
import { Provider } from 'react-redux';
import { Store } from './store';
import Counter from './components/counter';
import CounterClass from './components/counterClass';

const App = () => (
	<Provider store={Store}>
		<Counter />
		<CounterClass />
	</Provider>
);

export default App;
