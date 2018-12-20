import React, { Component } from 'react';

class Player extends Component {
	render() {
		const { style } = this.props;

		return (
			<div style={style}>
				Player
			</div>
		)
	}
}

export default Player;
