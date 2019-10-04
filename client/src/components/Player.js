import React, { Component } from 'react';
import Message from './Message';
<<<<<<< HEAD
import player from './player.png';

class Player extends Component {

	constructor(props) {
		super(props);
		this.handleEnter = this.handleEnter.bind(this);
		this.ultimateMessage = "";

	}
	render() {
		const { style } = this.props;//style of the players
	

		return (
			<div>


				<div style={style}>

					<Message textMessage={this.ultimateMessage}  style={{
						width: 50,
						height: 20,
						
						position: 'static'
					}}/>
					<input id="message" type="text" placeholder="Mensaje" onKeyDown={this.handleEnter} 
					style={{
						width: 50,
						height: 20,
						
						position: 'absolute'
					}}/>
					<img src={player} alt="Player" style={{
						width: 100,
						height: 100,
						top:70,
						position: 'absolute'
					}}/>
				</div>
			</div>

		)

	}
	handleEnter(e) {
		if (e.key === 'Enter') {
			this.ultimateMessage = e.target.value;
		}
	}

=======
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
	  
>>>>>>> e6a87d636a06404cd031993f571aa7fb5930bcd6
}

export default Player;
