import React, { Component } from 'react';
import Message from './Message';
import head from './head.png';
import body from './body.png';
import './Player.css';

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
			<h1> <input id="message" type="text" placeholder="Mensaje" onKeyDown={this.handleEnter} />
			<img src={head} alt="head" />
			<img src={body} alt="body" />
			</h1>		
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
