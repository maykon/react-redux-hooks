import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increment, set } from '../../store/reducers/counter';

class CounterClass extends Component {
	state = { value: 0 };
	render() {
		const { counter, increment, set } = this.props;
		const { value } = this.state;

		return (
			<div>
				<h1>Counter Class</h1>
				<p>
					Counter is: <strong>{counter}</strong>
				</p>
				<form>
					<input value={value} onChange={e => this.setState({ value: Number(e.target.value) })} />
					<button type="button" onClick={increment}>
						Increment
					</button>
					<button type="button" onClick={() => set(value)}>
						Set
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => state.counter;
const mapDispatchToProps = dispatch => bindActionCreators({ increment, set }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
