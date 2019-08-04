import React, { Component } from 'react';
import Component1 from './components/Component1';
import './App.css';
import Component2 from './components/Component2';
import Component3 from './components/Component3';

class App extends Component {
	state = {
		showComponent3: false
	};
	render() {
		return (
			<div className="App">
				<Component1 />
				<Component2 />
				<Component3 />
			</div>
		);
	}
}

export default App;
