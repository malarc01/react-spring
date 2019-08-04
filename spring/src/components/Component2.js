import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Component2 extends Component {
	render() {
		return (
			<Spring config={{ delay: 1000, duration: 4000 }} from={{ opacity: 0 }} to={{ opacity: 1 }}>
				{(props) => (
					<div style={props}>
						<div style={c2Style}>
							<h1>Component 2</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quae porro magnam
								sed quod deleniti nesciunt voluptatem quibusdam numquam, maiores illo officia corrupti
								rerum quia quis laborum, itaque hic obcaecati.
							</p>
							<button style={btn} onClick={this.props.toggle}>
								Toggle Component 3
							</button>
						</div>
					</div>
				)}
			</Spring>
		);
	}
}
const c2Style = {
	background: 'slateblue',
	color: 'white',
	padding: '1.5rem'
};

const btn = {};
export default Component2;
