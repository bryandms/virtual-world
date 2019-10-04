import React, { Component } from 'react';

class Message extends Component {
	render() {

		return (
			<div >
            	{this.props.textMessage}		
			</div>
		)
	}
}
export default Message;

