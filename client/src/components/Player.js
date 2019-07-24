import React, { Component } from 'react';
import Message from './Message';

class Player extends Component {
	
	constructor(props) {
        super(props);
		this.handleEnter = this.handleEnter.bind(this);
		this.ultimateMessage="";
		
    }
	render() {
		const { style } = this.props;

		return (
			<div>
		

			<div style={style}>
			
			<Message textMessage= {this.ultimateMessage} />
			<input id="message" type="text" placeholder="Mensaje" onKeyDown={this.handleEnter} />
			<h1>Player</h1>		
			</div>
			</div>
			
		)
		
	}
	 handleEnter(e) {
		if (e.key === 'Enter') {
			this.ultimateMessage=e.target.value;
		}
	  }
	  
}

export default Player;
